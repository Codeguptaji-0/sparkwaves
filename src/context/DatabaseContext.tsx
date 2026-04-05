import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  onSnapshot, 
  doc, 
  setDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase';

// --- Types ---
export interface Product {
  id: string;
  name: string;
  description: string;
  useCases: string[];
  model: string;
  features: string[];
  progressPercentage?: number;
}

export interface Client {
  id: string;
  email: string; // Used for Portal Login ID
  portalPassword: string; // Used for Portal Login Password
  company: string;
  projectName: string;
  projectStatus: 'Planning' | 'Development' | 'Testing' | 'Deployed';
  progressPercentage: number; // 0 to 100
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Ticket {
  id: string;
  email: string;
  subject: string;
  message: string;
  status: 'Open' | 'Closed' | 'In Progress';
  date: string;
}

export interface Query {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  isReplied: boolean;
}

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessReq: string;
  date: string;
  status: 'Pending' | 'Contacted';
}

export interface Settings {
  showReviews: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  message: string;
  rating: number;
}

interface DatabaseState {
  products: Product[];
  services: Service[];
  tickets: Ticket[];
  queries: Query[];
  testimonials: Testimonial[];
  clients: Client[];
  demoRequests: DemoRequest[];
  settings: Settings;
  setProducts: (data: Product[]) => void;
  setServices: (data: Service[]) => void;
  setTickets: (data: Ticket[]) => void;
  setQueries: (data: Query[]) => void;
  setTestimonials: (data: Testimonial[]) => void;
  setClients: (data: Client[]) => void;
  setDemoRequests: (data: DemoRequest[]) => void;
  setSettings: (data: Settings) => void;
}

// --- Default Seed Data ---
const DEFAULT_PRODUCTS: Product[] = [
  {
    id: '1',
    name: "E-comos",
    description: "The Ultimate E-Commerce Hub. Automate listings, pack recording, and dispute resolutions natively.",
    useCases: ["Auto-Listing", "Quality Dispuation"],
    model: "3-Tier Sub",
    features: ["Product Packaging Recorder", "Intelligent Analytics", "Workflow Scaling"],
    progressPercentage: 50
  },
  {
    id: '2',
    name: "Eudsaas",
    description: "Smart School Management Ecosystem uniting Principals, Teachers, and Parents completely paperless.",
    useCases: ["Digital Admin", "Parent Integration"],
    model: "3-Tier Sub",
    features: ["Attendance Engine", "Homework Broadcasts", "Bus Tracking"],
    progressPercentage: 60
  },
  {
    id: '3',
    name: "FuelOps Geo-Shift",
    description: "Private B2B Shift Management for Fuel Pumps backed by facial AI logs and deep geo-fences.",
    useCases: ["Attendance Verification", "Strict Geo-fencing"],
    model: "Enterprise",
    features: ["AI Face Recognition", "Live Geographic Auth", "Payroll Connector"],
    progressPercentage: 50
  }
];

const DEFAULT_SERVICES: Service[] = [
  {
    id: 's1',
    title: "Cloud & Infrastructure",
    description: "Scale effortlessly with secure, robust infrastructure tailored for high-availability enterprise applications.",
    features: ["Custom Hosted Architecture", "IaaS / PaaS Deployments", "Premium Web Hosting"]
  },
  {
    id: 's2',
    title: "Web & App Development",
    description: "Deliver stunning, high-performance web and mobile experiences engineered for maximum user engagement.",
    features: ["Full-Stack Web Apps", "Native iOS & Android", "AI-Powered Experiences"]
  },
  {
    id: 's3',
    title: "Data Intelligence",
    description: "Transform raw organizational data into actionable, predictive intelligence to outpace competitors.",
    features: ["Big Data Analysis", "Predictive Modeling", "Custom Data Pipelines"]
  },
  {
    id: 's4',
    title: "Automation & Growth",
    description: "Automate repetitive tasks and supercharge your acquisition channels for exponential revenue growth.",
    features: ["Workflow Automation", "Performance Marketing", "Lead Generation Systems"]
  }
];

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: "Enterprise Client",
    role: "Tech Lead",
    message: "Sparkwaves fundamentally transformed our operational efficiency. Their hybrid approach of SaaS and custom services is unmatched.",
    rating: 5
  }
];

// --- Context Definition ---
const DatabaseContext = createContext<DatabaseState | null>(null);

export const DatabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProductsState] = useState<Product[]>([]);
  const [services, setServicesState] = useState<Service[]>([]);
  const [tickets, setTicketsState] = useState<Ticket[]>([]);
  const [queries, setQueriesState] = useState<Query[]>([]);
  const [testimonials, setTestimonialsState] = useState<Testimonial[]>([]);
  const [clients, setClientsState] = useState<Client[]>([]);
  const [demoRequests, setDemoRequestsState] = useState<DemoRequest[]>([]);
  const [settings, setSettingsState] = useState<Settings>({ showReviews: false });
  const [isLoaded, setIsLoaded] = useState(false);

  // --- Firestore Real-Time Logic ---
  useEffect(() => {
    // 1. Helper for collection syncing
    const syncCollection = (collName: string, stateSetter: any, defaultData?: any[]) => {
      const q = query(collection(db, collName), orderBy('id', 'asc'));
      return onSnapshot(q, (snapshot) => {
        if (snapshot.empty && defaultData) {
          // Auto-seed if empty (optional, but requested for first-load)
          defaultData.forEach(async (item) => {
             await setDoc(doc(db, collName, item.id), item);
          });
        } else {
          const items = snapshot.docs.map(doc => doc.data() as any);
          stateSetter(items);
        }
      });
    };

    // 2. Initialize Listeners
    const unsubProducts = syncCollection('products', setProductsState, DEFAULT_PRODUCTS);
    const unsubServices = syncCollection('services', setServicesState, DEFAULT_SERVICES);
    const unsubTestimonials = syncCollection('testimonials', setTestimonialsState, DEFAULT_TESTIMONIALS);
    const unsubTickets = syncCollection('tickets', setTicketsState);
    const unsubQueries = syncCollection('queries', setQueriesState);
    const unsubClients = syncCollection('clients', setClientsState);
    const unsubDemoRequests = syncCollection('demoRequests', setDemoRequestsState);

    // Settings is a special single document
    const unsubSettings = onSnapshot(doc(db, 'config', 'settings'), (doc) => {
      if (doc.exists()) {
        setSettingsState(doc.data() as Settings);
      } else {
        const initialSettings = { showReviews: true };
        setDoc(doc.ref, initialSettings);
        setSettingsState(initialSettings);
      }
      setIsLoaded(true);
    });

    return () => {
      unsubProducts(); unsubServices(); unsubTestimonials(); 
      unsubTickets(); unsubQueries(); unsubClients(); 
      unsubDemoRequests(); unsubSettings();
    };
  }, []);

  // --- Persistent Setters (Now using Cloud Firestore) ---
  const setProducts = async (data: Product[]) => {
    // For simplicity in this React state management, we perform individual updates
    // In a massive app, use Batches, but here we keep your current logic of passing an array
    const existingIds = products.map(p => p.id);
    const incomingIds = data.map(p => p.id);
    
    // Detect deletions
    existingIds.forEach(async id => {
      if (!incomingIds.includes(id)) await deleteDoc(doc(db, 'products', id));
    });

    // Save/Update newest
    data.forEach(async item => {
       await setDoc(doc(db, 'products', item.id), item);
    });
  };

  const setServices = async (data: Service[]) => {
    const existingIds = services.map(s => s.id);
    const incomingIds = data.map(s => s.id);
    existingIds.forEach(async id => { if (!incomingIds.includes(id)) await deleteDoc(doc(db, 'services', id)); });
    data.forEach(async item => { await setDoc(doc(db, 'services', item.id), item); });
  };

  const setTickets = async (data: Ticket[]) => {
    const existingIds = tickets.map(t => t.id);
    const incomingIds = data.map(t => t.id);
    existingIds.forEach(async id => { if (!incomingIds.includes(id)) await deleteDoc(doc(db, 'tickets', id)); });
    data.forEach(async item => { await setDoc(doc(db, 'tickets', item.id), item); });
  };

  const setQueries = async (data: Query[]) => {
    const existingIds = queries.map(q => q.id);
    const incomingIds = data.map(q => q.id);
    existingIds.forEach(async id => { if (!incomingIds.includes(id)) await deleteDoc(doc(db, 'queries', id)); });
    data.forEach(async item => { await setDoc(doc(db, 'queries', item.id), item); });
  };

  const setTestimonials = async (data: Testimonial[]) => {
    const existingIds = testimonials.map(t => t.id);
    const incomingIds = data.map(t => t.id);
    existingIds.forEach(async id => { if (!incomingIds.includes(id)) await deleteDoc(doc(db, 'testimonials', id)); });
    data.forEach(async item => { await setDoc(doc(db, 'testimonials', item.id), item); });
  };

  const setClients = async (data: Client[]) => {
    const existingIds = clients.map(c => c.id);
    const incomingIds = data.map(c => c.id);
    existingIds.forEach(async id => { if (!incomingIds.includes(id)) await deleteDoc(doc(db, 'clients', id)); });
    data.forEach(async item => { await setDoc(doc(db, 'clients', item.id), item); });
  };

  const setDemoRequests = async (data: DemoRequest[]) => {
    const existingIds = demoRequests.map(d => d.id);
    const incomingIds = data.map(d => d.id);
    existingIds.forEach(async id => { if (!incomingIds.includes(id)) await deleteDoc(doc(db, 'demoRequests', id)); });
    data.forEach(async item => { await setDoc(doc(db, 'demoRequests', item.id), item); });
  };

  const setSettings = async (data: Settings) => {
    await setDoc(doc(db, 'config', 'settings'), data);
  };

  if (!isLoaded) return null; // Avoid hydration mismatch

  return (
    <DatabaseContext.Provider value={{
      products, services, tickets, queries, testimonials, clients, demoRequests, settings,
      setProducts, setServices, setTickets, setQueries, setTestimonials, setClients, setDemoRequests, setSettings
    }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) throw new Error("useDatabase must be used within DatabaseProvider");
  return context;
};
