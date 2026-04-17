import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AdminDashboard: React.FC = () => {

  const { user, profile, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    full_name: profile?.full_name || '',
    company_name: profile?.company_name || '',
    phone: profile?.phone || '',
  });
  const [saving, setSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    await updateProfile(profileForm);
    setSaving(false);
    setEditingProfile(false);
  };

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'User';
  const initials = displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);

  const fleetData = [
    { id: 'NB-1234', route: 'Route 138: Colombo - Kandy (via Kadawatha)', status: 'active', statusLabel: 'Active', trips: 3, income: 80700, expenses: 14100 },
    { id: 'NC-5678', route: 'Route 2: Colombo - Galle (Coastal Road)', status: 'active', statusLabel: 'Active', trips: 2, income: 67000, expenses: 17200 },
    { id: 'WP-9012', route: 'Route 4: Colombo - Ratnapura', status: 'active', statusLabel: 'Active', trips: 2, income: 55300, expenses: 12300 },
    { id: 'SP-3456', route: 'Route 6: Colombo - Kurunegala', status: 'active', statusLabel: 'Active', trips: 0, income: 0, expenses: 0 },
    { id: 'NW-7890', route: 'Route 15: Colombo - Negombo', status: 'maintenance', statusLabel: 'Maintenance', trips: 0, income: 0, expenses: 0 },
    { id: 'CP-2345', route: 'Route 48: Kandy - Nuwara Eliya', status: 'active', statusLabel: 'Active', trips: 0, income: 0, expenses: 0 },
  ];

  const todayIncome = fleetData.reduce((sum, b) => sum + b.income, 0);
  const todayExpenses = fleetData.reduce((sum, b) => sum + b.expenses, 0);
  const netDTI = todayIncome - todayExpenses;
  const tripsCompleted = fleetData.reduce((sum, b) => sum + b.trips, 0);
  const totalTrips = 7;
  const activeBuses = fleetData.filter(b => b.status === 'active').length;

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
    { id: 'fleet', label: 'Fleet', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-4 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    )},
    { id: 'trips', label: 'Trips', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )},
    { id: 'reports', label: 'Reports', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )},
    { id: 'profile', label: 'Profile', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )},
  ];

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-50 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-5 py-5 border-b border-slate-100">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <img src="/logo.png" alt="buseka" className="h-9 w-auto object-contain" />
              <div>
                <span className="text-lg font-bold text-slate-800 tracking-tight">Bus<span className="text-orange-500">E</span>ka</span>
                <p className="text-[10px] text-slate-400">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* User */}
          <div className="px-3 py-4 border-t border-slate-100">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{displayName}</p>
                <p className="text-xs text-slate-400 truncate">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full mt-2 flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div>
                <h1 className="text-lg font-bold text-slate-800 capitalize">{activeSection === 'overview' ? 'Dashboard' : activeSection}</h1>
                <p className="text-xs text-slate-400">{dateStr} · {activeBuses} active buses</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {initials}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          {/* OVERVIEW SECTION */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Today's Income", value: `Rs. ${todayIncome.toLocaleString()}`, change: '+8.2%', positive: true, color: 'bg-green-500', icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  )},
                  { label: "Today's Expenses", value: `Rs. ${todayExpenses.toLocaleString()}`, change: '-3.1%', positive: false, color: 'bg-red-500', icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                  )},
                  { label: 'Net DTI', value: `Rs. ${netDTI.toLocaleString()}`, change: '+12.5%', positive: true, color: 'bg-orange-500', icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  )},
                  { label: 'Trips Completed', value: `${tripsCompleted} / ${totalTrips}`, change: '1 in progress', positive: true, color: 'bg-blue-500', icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  )},
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                        {stat.icon}
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xl lg:text-2xl font-bold text-slate-800">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Fleet Status & Quick Stats */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Fleet Status */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-bold text-slate-800">Fleet Status Today</h2>
                    <button onClick={() => setActiveSection('fleet')} className="text-sm text-orange-500 hover:text-orange-600 font-medium">View All</button>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {fleetData.map((bus) => (
                      <div key={bus.id} className="px-5 py-3.5 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                        <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-4 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-800">{bus.id}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              bus.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                            }`}>
                              {bus.statusLabel}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 truncate">{bus.route}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm font-bold text-slate-800">Rs. {bus.income.toLocaleString()}</p>
                          <p className="text-[10px] text-slate-400">{bus.trips} trips · Rs. {bus.expenses.toLocaleString()} exp.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats & Alerts */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-slate-100 p-5">
                    <h2 className="font-bold text-slate-800 mb-4">Quick Stats</h2>
                    <div className="space-y-4">
                      {[
                        { label: 'Active Buses', value: activeBuses, color: 'bg-teal-100 text-teal-600' },
                        { label: 'Drivers', value: 3, color: 'bg-blue-100 text-blue-600' },
                        { label: 'Conductors', value: 4, color: 'bg-purple-100 text-purple-600' },
                        { label: 'Passengers Today', value: 258, color: 'bg-orange-100 text-orange-600' },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.color}`}>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <span className="text-sm text-slate-600">{s.label}</span>
                          </div>
                          <span className="text-sm font-bold text-slate-800">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 p-5">
                    <h2 className="font-bold text-slate-800 mb-4">Alerts</h2>
                    <div className="space-y-3">
                      <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl">
                        <p className="text-sm font-semibold text-amber-700">WP-9012 Permit Expiry</p>
                        <p className="text-xs text-amber-500">Expires: 2026-04-20</p>
                      </div>
                      <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                        <p className="text-sm font-semibold text-red-700">NW-7890 in Maintenance</p>
                        <p className="text-xs text-red-500">No trips can be scheduled</p>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                        <p className="text-sm font-semibold text-blue-700">1 Trip(s) In Progress</p>
                        <p className="text-xs text-blue-500">NB-1234 on Route 138</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FLEET SECTION */}
          {activeSection === 'fleet' && (
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-bold text-slate-800">All Buses</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Bus ID</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Route</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Trips</th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Income</th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Expenses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {fleetData.map((bus) => (
                      <tr key={bus.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3 font-bold text-slate-800">{bus.id}</td>
                        <td className="px-5 py-3 text-slate-500">{bus.route}</td>
                        <td className="px-5 py-3">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            bus.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                          }`}>{bus.statusLabel}</span>
                        </td>
                        <td className="px-5 py-3 text-right text-slate-600">{bus.trips}</td>
                        <td className="px-5 py-3 text-right font-semibold text-slate-800">Rs. {bus.income.toLocaleString()}</td>
                        <td className="px-5 py-3 text-right text-slate-500">Rs. {bus.expenses.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TRIPS SECTION */}
          {activeSection === 'trips' && (
            <div className="bg-white rounded-xl border border-slate-100 p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Trip Management</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">Trip management features are available through the Duty App. Drivers and conductors record trips in real-time from their mobile devices.</p>
            </div>
          )}

          {/* REPORTS SECTION */}
          {activeSection === 'reports' && (
            <div className="bg-white rounded-xl border border-slate-100 p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Reports & Analytics</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">Detailed reporting and analytics features are coming soon. You'll be able to generate daily settlements, income/expense summaries, and performance reports.</p>
            </div>
          )}

          {/* PROFILE SECTION */}
          {activeSection === 'profile' && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="font-bold text-slate-800">Profile Settings</h2>
                  {!editingProfile ? (
                    <button
                      onClick={() => {
                        setProfileForm({
                          full_name: profile?.full_name || '',
                          company_name: profile?.company_name || '',
                          phone: profile?.phone || '',
                        });
                        setEditingProfile(true);
                      }}
                      className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button onClick={() => setEditingProfile(false)} className="text-sm text-slate-500 hover:text-slate-700 font-medium">Cancel</button>
                      <button
                        onClick={handleSaveProfile}
                        disabled={saving}
                        className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-lg font-medium disabled:opacity-50"
                      >
                        {saving ? 'Saving...' : 'Save'}
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                      {initials}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-800">{displayName}</p>
                      <p className="text-sm text-slate-400">{user?.email}</p>
                    </div>
                  </div>

                  {editingProfile ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                        <input
                          type="text"
                          value={profileForm.full_name}
                          onChange={(e) => setProfileForm({ ...profileForm, full_name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          value={profileForm.company_name}
                          onChange={(e) => setProfileForm({ ...profileForm, company_name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400"
                          placeholder="Your bus company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={profileForm.phone}
                          onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400"
                          placeholder="+94 7X XXX XXXX"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {[
                        { label: 'Full Name', value: profile?.full_name || 'Not set' },
                        { label: 'Email', value: user?.email || '' },
                        { label: 'Company', value: profile?.company_name || 'Not set' },
                        { label: 'Phone', value: profile?.phone || 'Not set' },
                        { label: 'Role', value: profile?.role || 'owner' },
                        { label: 'Member Since', value: profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A' },
                      ].map((field, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                          <span className="text-sm text-slate-500">{field.label}</span>
                          <span className="text-sm font-medium text-slate-800 capitalize">{field.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
