import React, { useState, useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  LayoutDashboard, 
  Users, 
  Zap, 
  Menu, 
  X,
  CreditCard,
  BellRing,
  BarChart,
  ShieldCheck,
  Search,
  Sparkles
} from 'lucide-react';
import { 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid
} from 'recharts';

// --- Shared UI Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: { 
  children?: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost', 
  className?: string,
  onClick?: () => void
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-sharp hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200 border-2 border-primary",
    secondary: "bg-white text-primary border-2 border-gray-200 hover:border-primary hover:bg-gray-50",
    outline: "border-2 border-gray-200 bg-transparent text-gray-600 hover:text-primary hover:border-primary transition-all font-medium",
    ghost: "text-gray-500 hover:text-primary hover:bg-gray-100/50 font-medium"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: { children?: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'blue' }: { children?: React.ReactNode, variant?: 'blue' | 'green' | 'purple' }) => {
  const styles = {
    blue: "bg-gray-100 text-gray-800 border border-gray-200",
    green: "bg-emerald-50 text-emerald-800 border border-emerald-100",
    purple: "bg-amber-50 text-amber-800 border border-amber-100"
  };
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${styles[variant]}`}>
      {children}
    </span>
  );
};

// --- Section Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openWaitlist } = useClerk();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50' : 'bg-transparent pt-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              Q
            </div>
            <span className="font-bold text-xl tracking-tight text-primary">quickly4u</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {['Features', 'Manifesto', 'Enterprise'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-all duration-200">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="primary" 
              className="px-6 py-2.5 shadow-lg shadow-primary/25"
              onClick={() => openWaitlist()}
            >
              Join Waitlist
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-4 shadow-lg">
          <a href="#features" className="block text-base font-medium text-gray-600 hover:text-primary">Features</a>
          <a href="#manifesto" className="block text-base font-medium text-gray-600 hover:text-primary">Manifesto</a>
          <a href="#" className="block text-base font-medium text-gray-600 hover:text-primary">Enterprise</a>
          <Button 
            variant="primary" 
            className="w-full justify-center"
            onClick={() => openWaitlist()}
          >
            Join Waitlist
          </Button>
        </div>
      )}
    </nav>
  );
};

const HeroDiagram = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] bg-white border border-border shadow-xl overflow-hidden flex items-center justify-center p-8 select-none group rounded-sm">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      
      {/* Central Hub */}
      <div className="relative z-10 flex flex-col items-center transform scale-90 md:scale-100 transition-transform duration-500">
        {/* Connection Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-100">
           {/* Sharp Lines for Circuit Board feel */}
           <div className="absolute top-1/2 left-1/2 w-px h-32 bg-primary -translate-x-1/2 -translate-y-[9rem]"></div>
           <div className="absolute top-1/2 left-1/2 w-80 h-px bg-primary -translate-x-1/2 translate-y-16"></div>
           <div className="absolute top-1/2 left-1/2 w-px h-10 bg-primary -translate-x-[10rem] translate-y-16"></div>
           <div className="absolute top-1/2 left-1/2 w-px h-10 bg-primary translate-x-0 translate-y-16"></div>
           <div className="absolute top-1/2 left-1/2 w-px h-10 bg-primary translate-x-[10rem] translate-y-16"></div>
        </div>

        {/* Main Request Card */}
        <div className="w-80 bg-white border border-border p-6 mb-20 relative z-20 shadow-[8px_8px_0px_0px_rgba(231,229,228,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(231,229,228,1)] transition-all duration-200">
          <div className="flex items-center gap-4 mb-6 border-b border-border pb-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
               <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-primary tracking-wide">REQUEST #4092</div>
              <div className="text-xs text-gray-500 font-mono mt-1">MARKETING_SOFTWARE_Q3</div>
            </div>
            <div className="ml-auto">
               <Badge variant="purple">Processing</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span>Budget Impact</span>
                <span className="text-emerald-700">Approved</span>
            </div>
            <div className="h-1 w-full bg-gray-100">
                <div className="h-full w-3/4 bg-primary"></div>
            </div>
            <div className="flex gap-1 mt-2">
                <div className="h-1 w-20 bg-gray-200"></div>
                <div className="h-1 w-12 bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Distributed Nodes */}
        <div className="flex gap-10 md:gap-20 relative z-10 mt-4">
          {/* Manager Node */}
          <div className="w-32 h-32 bg-white border border-border flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center text-primary border border-gray-200">
              <CheckCircle2 size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Approval</span>
          </div>

          {/* Vendor Node */}
          <div className="w-32 h-32 bg-white border border-border flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center text-primary border border-gray-200">
              <Users size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Portal</span>
          </div>

          {/* Finance Node */}
          <div className="w-32 h-32 bg-white border border-border flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300 shadow-sm">
             <div className="w-10 h-10 flex items-center justify-center text-primary border border-gray-200">
              <CreditCard size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Payment</span>
          </div>
        </div>
      </div>

      {/* Floating Elements for decor */}
      <div className="absolute top-12 left-12 p-4 bg-white border border-border shadow-lg hidden md:block">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-primary">
          <div className="w-2 h-2 bg-emerald-600 animate-pulse"></div>
          System Operational
        </div>
      </div>

       <div className="absolute bottom-12 right-12 p-4 bg-white border border-border shadow-lg hidden md:block">
        <div className="flex items-center gap-4 text-xs font-medium text-primary">
          <div className="p-2 bg-amber-50 text-amber-700 border border-amber-100">
            <BellRing size={16} />
          </div>
          <div>
            <div className="font-serif font-bold">Contract Renewal</div>
            <div className="text-gray-400 font-mono text-[10px] mt-1">SALESFORCE • 30 DAYS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { openWaitlist } = useClerk();
  
  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
      {/* Background Noise Texture */}
      <div className="bg-paper-texture"></div>
      
      <div className="text-center max-w-5xl mx-auto mb-24 relative z-10">
        <div className="inline-flex items-center border-b border-primary/20 pb-1 text-xs font-bold tracking-widest uppercase text-primary mb-12">
           <span className="w-2 h-2 bg-accent mr-3"></span>
           The Modern Buying Experience
        </div>
        
        <h1 className="text-7xl md:text-9xl font-serif text-primary mb-12 leading-[0.9] tracking-tight">
          Procurement<br />
          <span className="italic text-gray-400 font-light">Simplified.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-light mb-16 leading-relaxed max-w-2xl mx-auto font-sans font-light">
          Empower your team with a purchasing process they'll actually love. Fast approvals, clear budgets, and zero friction.
        </p>
        
        <div className="flex items-center justify-center">
          <Button 
            className="px-10 py-4 h-[56px] bg-primary text-white hover:bg-accent hover:border-accent text-base tracking-wide uppercase"
            onClick={() => openWaitlist()}
          >
            Join Waitlist
          </Button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 border-t border-gray-200 pt-8 max-w-xs mx-auto">
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">SOC2 Type II</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">GDPR Ready</div>
        </div>
      </div>

      <HeroDiagram />
    </section>
  );
};

// --- Mock Data for Charts ---
const spendData = [
  { name: 'Jan', marketing: 4000, engineering: 2400 },
  { name: 'Feb', marketing: 3000, engineering: 1398 },
  { name: 'Mar', marketing: 2000, engineering: 9800 },
  { name: 'Apr', marketing: 2780, engineering: 3908 },
  { name: 'May', marketing: 1890, engineering: 4800 },
  { name: 'Jun', marketing: 2390, engineering: 3800 },
  { name: 'Jul', marketing: 3490, engineering: 4300 },
];

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 relative border-t border-border">
       <div className="absolute inset-0 bg-paper-texture"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-border pb-12">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Engineered for the<br/>Modern CFO.
            </h3>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-sm leading-relaxed mb-2">
            Replace rigid ERP modules with a flexible, API-first financial layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Workflow Engine */}
          <Card className="md:col-span-2 p-10 flex flex-col justify-between group border-2 border-transparent hover:border-primary">
            <div className="mb-12">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center mb-8 shadow-sharp">
                <LayoutDashboard size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-primary mb-4">Smart Approvals</h4>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Automate routing based on department, budget, or custom rules. 
                Reduce cycle time by 40% with multi-level matrices.
              </p>
            </div>
            
            {/* Visual: Workflow Schematic */}
            <div className="w-full bg-surface-subtle border border-border p-8 h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
              <div className="flex items-center gap-8 relative z-10">
                 <div className="px-6 py-4 bg-white border-2 border-primary shadow-sharp text-xs font-mono text-primary font-bold uppercase">
                    Requester
                 </div>
                 
                 <div className="w-20 h-px bg-primary relative">
                   <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                 </div>
                 
                 <div className="px-6 py-4 bg-primary text-white shadow-sharp text-xs font-mono font-bold uppercase">
                    Approver
                 </div>
                 
                 <div className="w-20 h-px bg-primary relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                 </div>

                 <div className="px-6 py-4 bg-white border-2 border-gray-200 text-xs font-mono text-gray-400 uppercase">
                    Finance
                 </div>
              </div>
            </div>
          </Card>

          {/* Feature 2: Vendor Portal */}
          <Card className="p-10 flex flex-col justify-between group border-2 border-transparent hover:border-primary">
             <div className="mb-8">
              <div className="w-12 h-12 bg-white border-2 border-primary text-primary flex items-center justify-center mb-8 shadow-sharp">
                <Users size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif font-bold text-primary mb-3">Vendor Portal</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Self-service onboarding, RFQ submissions, and automated compliance checks (KYC).
              </p>
            </div>
            <div className="bg-surface-subtle border border-border p-6 h-52 relative overflow-hidden">
               <div className="bg-white p-4 border border-gray-200 shadow-sm mb-3 translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
                 <div className="flex justify-between mb-3">
                    <div className="h-1.5 w-12 bg-gray-800"></div>
                    <div className="h-1.5 w-4 bg-gray-300"></div>
                 </div>
                 <div className="h-1.5 w-24 bg-gray-200"></div>
               </div>
               <div className="bg-white p-4 border border-gray-200 shadow-sm translate-x-6 opacity-60 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-500 delay-75">
                 <div className="h-1.5 w-16 bg-gray-300 mb-3"></div>
                 <div className="h-1.5 w-8 bg-gray-200"></div>
               </div>
               <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary flex items-center justify-center text-white">
                 <ArrowRight size={16} />
               </div>
            </div>
          </Card>

          {/* Feature 3: Spend Analytics */}
          <Card className="p-10 flex flex-col justify-between group border-2 border-transparent hover:border-primary">
             <div className="mb-8">
              <div className="w-12 h-12 bg-white border-2 border-primary text-primary flex items-center justify-center mb-8 shadow-sharp">
                <BarChart size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif font-bold text-primary mb-3">Spend Intelligence</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Real-time visibility into burn rates, category spend, and budget vs actuals.
              </p>
            </div>
            <div className="h-52 w-full -mx-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={spendData}>
                  <defs>
                    <linearGradient id="colorMarketing" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1C1917" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#1C1917" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="0" vertical={false} stroke="#E7E5E4" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #1C1917', borderRadius: '0px', fontSize: '12px', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
                    itemStyle={{ color: '#1C1917', fontWeight: 700, fontFamily: 'serif' }}
                    cursor={{ stroke: '#1C1917', strokeWidth: 1 }}
                  />
                  <Area 
                    type="step" 
                    dataKey="marketing" 
                    stroke="#1C1917" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorMarketing)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Feature 4: Contract Lifecycle */}
          <Card className="md:col-span-2 p-10 flex flex-col justify-between group border-2 border-transparent hover:border-primary">
            <div className="flex flex-col md:flex-row md:items-start gap-12">
              <div className="flex-1">
                 <div className="w-12 h-12 bg-primary text-white flex items-center justify-center mb-8 shadow-sharp">
                  <FileText size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-4">Contract Lifecycle</h4>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Never miss a renewal. Centralized repository with AI-driven metadata extraction and automated 30/60/90 day alerts.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="green">Auto-renewal</Badge>
                  <Badge variant="blue">SLA compliance</Badge>
                  <Badge variant="purple">Metadata</Badge>
                </div>
              </div>
              
              <div className="flex-1 bg-surface-subtle border border-border p-8 relative">
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between p-4 bg-white border-2 border-primary shadow-sharp">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-red-600"></div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-primary">AWS Enterprise</div>
                        <div className="text-[10px] text-gray-500 font-mono mt-1">EXPIRING: 5 DAYS</div>
                      </div>
                    </div>
                    <Button variant="outline" className="h-8 px-4 text-[10px] rounded-none border-primary text-primary hover:bg-primary hover:text-white">REVIEW</Button>
                  </div>
                   <div className="flex items-center justify-between p-4 bg-white border border-gray-200 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-amber-500"></div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-primary">Salesforce</div>
                        <div className="text-[10px] text-gray-500 font-mono mt-1">EXPIRING: 45 DAYS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  return (
    <section id="manifesto" className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-0.5 bg-accent"></span>
              <h2 className="text-xs font-bold text-accent uppercase tracking-widest">The Manifesto</h2>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[0.9]">
              The End of <br/><span className="italic text-gray-400 font-serif">Rogue Spend.</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light border-l-2 border-gray-800 pl-6">
              Enterprise suites like SAP Ariba are too expensive and complex. SMB tools like spreadsheets break at scale. quickly4u bridges the gap.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "100% Visibility", desc: "Gain complete insight into where money goes before it's spent." },
                { title: "Unified Platform", desc: "Integrates PR, PO, RFQ, and Contracts in one place." },
                { title: "Quick Deployment", desc: "Go live in days, not months. Modern API-first architecture." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group border-b border-gray-800 pb-8 last:border-0">
                  <div className="mt-1">
                    <div className="flex items-center justify-center w-6 h-6 bg-accent text-primary rounded-none">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-serif mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <Card className="relative p-12 border-0 shadow-2xl bg-white text-primary">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(circle,theme(colors.accent)_1px,transparent_1px)] bg-[length:8px_8px] opacity-20"></div>
                
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10 border-b border-gray-200 pb-6 flex items-center justify-between">
                  <span>Market Analysis</span>
                  <Search size={16} />
                </h4>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 p-4 -mx-4 border-l-4 border-transparent hover:border-red-600 hover:bg-gray-50 transition-all duration-300">
                    <div className="text-2xl font-serif font-bold text-gray-300">01</div>
                    <div>
                      <div className="text-base font-bold text-primary uppercase tracking-wide">Manual Excel Chaos</div>
                      <div className="text-sm text-gray-500 mt-2 italic font-serif">"Approval cycles take days, lost requests, no visibility."</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-4 -mx-4 border-l-4 border-transparent hover:border-red-600 hover:bg-gray-50 transition-all duration-300">
                     <div className="text-2xl font-serif font-bold text-gray-300">02</div>
                    <div>
                      <div className="text-base font-bold text-primary uppercase tracking-wide">Missed Renewals</div>
                      <div className="text-sm text-gray-500 mt-2 italic font-serif">"Wasted budget on auto-renews and unwanted services."</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-4 -mx-4 border-l-4 border-transparent hover:border-red-600 hover:bg-gray-50 transition-all duration-300">
                     <div className="text-2xl font-serif font-bold text-gray-300">03</div>
                    <div>
                      <div className="text-base font-bold text-primary uppercase tracking-wide">No Vendor Insights</div>
                      <div className="text-sm text-gray-500 mt-2 italic font-serif">"Selection based on gut feel rather than performance scorecards."</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t-2 border-primary">
                  <div className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Average company loses</div>
                  <div className="flex items-baseline gap-4">
                    <div className="text-6xl font-serif font-bold text-primary tracking-tighter">8.6%</div>
                    <div className="text-sm font-medium text-gray-500 max-w-[120px] leading-tight">of contract value due to poor CLM</div>
                  </div>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { openWaitlist } = useClerk();
  
  return (
    <section className="py-32 border-t border-border relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-24 bg-primary"></div>
          
          <h2 className="text-5xl md:text-8xl font-serif text-primary mb-10 leading-[0.9] tracking-tight">
            Ready to <br/><span className="italic text-gray-400">Upgrade?</span>
          </h2>
          <p className="text-primary-light text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join the waitlist today and get early access to the only unified procurement OS built for the modern enterprise.
          </p>
          
          <div className="flex items-center justify-center">
            <Button 
              className="px-12 py-4 h-[60px] bg-primary text-white hover:bg-accent hover:border-accent border-2 border-primary font-bold tracking-widest uppercase text-sm"
              onClick={() => openWaitlist()}
            >
              Join Waitlist
            </Button>
          </div>
          <p className="mt-12 text-xs text-gray-400 font-bold uppercase tracking-widest border-t border-gray-100 pt-8 inline-block px-12">
             Limited Availability Q3 2024
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary font-bold text-lg rounded-none">Q</div>
          <span className="font-serif font-bold text-2xl tracking-tight">quickly4u</span>
        </div>
        <div className="text-xs text-gray-500 font-mono">
          &copy; {new Date().getFullYear()} quickly4u. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface-subtle selection:bg-primary/20 selection:text-primary relative">
      <div className="bg-noise"></div>
      <Navbar />
      <Hero />
      <BentoGrid />
      <ValueProp />
      <CTA />
      <Footer />
    </div>
  );
}