import React, { useState, useEffect } from 'react';
import { 
  User, 
  Car, 
  MapPin, 
  Bell, 
  CreditCard, 
  History, 
  Star, 
  MessageCircle, 
  QrCode,
  Search,
  Plus,
  Settings,
  Phone,
  Mail,
  Clock,
  Navigation,
  Wallet,
  Share2,
  ChevronRight,
  Home,
  UserPlus,
  Eye,
  EyeOff,
  Calendar,
  Timer,
  DollarSign,
  Check,
  X,
  Send,
  Camera,
  Edit3,
  LogOut,
  Shield,
  HelpCircle,
  Zap,
  Fuel,
  ParkingCircle,
  Building,
  Users,
  TrendingUp,
  BarChart3,
  Activity,
  AlertCircle,
  CheckCircle,
  Trash2,
  Edit,
  Filter,
  RefreshCw,
  MoreVertical,
  Save,
  Battery,
  Loader
} from 'lucide-react';

const ParkingOwnerApp = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [parkingLots, setParkingLots] = useState([
    {
      id: 1,
      name: "Phoenix MarketCity Parking",
      location: "Viman Nagar, Pune",
      address: "Phoenix MarketCity, Viman Nagar, Pune - 411014",
      totalSlots: 200,
      occupiedSlots: 145,
      evSlots: 30,
      evOccupied: 22,
      status: "active",
      pricing: {
        hourly: 20,
        daily: 200,
        monthly: 5000,
        evHourly: 30
      },
      features: ['CCTV', 'Security', 'EV Charging', '24/7 Access', 'Valet Service'],
      operatingHours: "24/7",
      contactNumber: "+91 98765 43210",
      monthlyRevenue: 285000,
      todayRevenue: 12500,
      coordinates: { latitude: 18.5204, longitude: 73.8567 }
    },
    {
      id: 2,
      name: "Koregaon Park Shopping Complex",
      location: "Koregaon Park, Pune",
      address: "North Main Road, Koregaon Park, Pune - 411001",
      totalSlots: 150,
      occupiedSlots: 98,
      evSlots: 20,
      evOccupied: 15,
      status: "active",
      pricing: {
        hourly: 25,
        daily: 250,
        monthly: 6000,
        evHourly: 35
      },
      features: ['CCTV', 'Security', 'EV Charging', 'Covered Parking'],
      operatingHours: "6 AM - 12 AM",
      contactNumber: "+91 98765 43211",
      monthlyRevenue: 195000,
      todayRevenue: 8750,
      coordinates: { latitude: 18.5362, longitude: 73.8962 }
    }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "New booking at Phoenix MarketCity - Slot A-12", time: "2 mins ago", type: "booking", read: false },
    { id: 2, message: "Payment received: ₹250 from vehicle MH 12 AB 1234", time: "5 mins ago", type: "payment", read: false },
    { id: 3, message: "Slot B-8 maintenance completed", time: "1 hour ago", type: "maintenance", read: true }
  ]);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      lotName: "Phoenix MarketCity Parking",
      customerName: "Rahul Sharma",
      vehicle: "MH 12 AB 1234",
      slot: "A-12",
      startTime: "2:30 PM",
      endTime: "4:45 PM",
      duration: "2h 15m",
      amount: 45,
      status: "active",
      date: "2025-08-18"
    },
    {
      id: 2,
      lotName: "Koregaon Park Shopping Complex",
      customerName: "Priya Patel",
      vehicle: "MH 12 CD 5678",
      slot: "B-5",
      startTime: "1:00 PM",
      endTime: "3:30 PM",
      duration: "2h 30m",
      amount: 62.5,
      status: "completed",
      date: "2025-08-18"
    }
  ]);

  const [newLot, setNewLot] = useState({
    name: '',
    location: '',
    address: '',
    totalSlots: '',
    evSlots: '',
    hourlyRate: '',
    evHourlyRate: '',
    features: [],
    contactNumber: ''
  });

  const availableFeatures = [
    'CCTV', 'Security', 'EV Charging', '24/7 Access', 
    'Valet Service', 'Covered Parking'
  ];

  // Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">SmartPark</h1>
          <p className="text-gray-600 mt-2">Owner Dashboard</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email or Phone</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter email or phone"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setUser({ name: "Rajesh Kumar", email: "rajesh@parkinglot.com", phone: "+91 98765 43210" });
              setCurrentScreen('dashboard');
            }}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
          >
            Login to Dashboard
          </button>

          <div className="text-center">
            <span className="text-gray-600">or</span>
          </div>

          <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
            Login with OTP
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            New parking lot owner?{' '}
            <button
              onClick={() => setCurrentScreen('register')}
              className="text-emerald-600 font-semibold hover:underline"
            >
              Register Here
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  // Dashboard Screen
  const DashboardScreen = () => {
    const totalRevenue = parkingLots.reduce((sum, lot) => sum + (lot.todayRevenue || 0), 0);
    const totalSlots = parkingLots.reduce((sum, lot) => sum + lot.totalSlots, 0);
    const totalOccupied = parkingLots.reduce((sum, lot) => sum + lot.occupiedSlots, 0);
    const occupancyRate = totalSlots ? Math.round((totalOccupied / totalSlots) * 100) : 0;

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Welcome, {user?.name}</h1>
                <p className="text-emerald-100 text-sm">Manage your parking empire</p>
              </div>
            </div>
            <div className="relative">
              <Bell className="w-6 h-6 cursor-pointer" onClick={() => setCurrentScreen('notifications')} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {notifications.filter(n => !n.read).length}
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold">{parkingLots.length}</p>
              <p className="text-xs text-emerald-100">Parking Lots</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-xs text-emerald-100">Today Revenue</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold">{occupancyRate}%</p>
              <p className="text-xs text-emerald-100">Occupancy</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xl font-bold">{bookings.filter(b => b.status === 'active').length}</p>
              <p className="text-xs text-emerald-100">Active</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 -mt-8">
          <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setCurrentScreen('addLot')}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-xl flex flex-col items-center space-y-2 hover:from-emerald-600 hover:to-teal-600 transition-all"
              >
                <Plus className="w-8 h-8" />
                <span className="font-medium">Add Parking Lot</span>
              </button>
              <button
                onClick={() => setCurrentScreen('analytics')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl flex flex-col items-center space-y-2 hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                <BarChart3 className="w-8 h-8" />
                <span className="font-medium">View Analytics</span>
              </button>
            </div>
          </div>

          {/* Today's Performance */}
          <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Today's Performance</h2>
            <div className="space-y-3">
              {parkingLots.map(lot => (
                <div key={lot.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{lot.name}</h3>
                    <p className="text-sm text-gray-600">{lot.occupiedSlots}/{lot.totalSlots} occupied</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-emerald-600">₹{lot.todayRevenue?.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{Math.round((lot.occupiedSlots / lot.totalSlots) * 100)}% full</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Options */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <h2 className="text-lg font-semibold p-4 text-gray-800 border-b">Management Tools</h2>
            {[
              { icon: Building, label: 'Manage Parking Lots', screen: 'parkingLots' },
              { icon: Activity, label: 'Live Bookings', screen: 'liveBookings' },
              { icon: TrendingUp, label: 'Revenue Analytics', screen: 'analytics' },
              { icon: Users, label: 'Customer Management', screen: 'customers' },
              { icon: Settings, label: 'Lot Settings', screen: 'settings' },
              { icon: MessageCircle, label: 'Customer Support', screen: 'support' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentScreen(item.screen)}
                className="w-full flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-6 h-6 text-gray-600" />
                  <span className="text-gray-800">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    );
  };

  // Parking Lots Management Screen
  const ParkingLotsScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Parking Lots" onBack={() => setCurrentScreen('dashboard')} />
      
      <div className="p-4">
        <button
          onClick={() => setCurrentScreen('addLot')}
          className="w-full mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl flex items-center justify-center space-x-2 hover:from-emerald-700 hover:to-teal-700 transition-all"
        >
          <Plus className="w-6 h-6" />
          <span className="font-semibold">Add New Parking Lot</span>
        </button>

        <div className="space-y-4">
          {parkingLots.map((lot) => (
            <div key={lot.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{lot.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {lot.location}
                  </p>
                  <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                    lot.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {lot.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setCurrentScreen('editLot')}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <p className="text-lg font-bold text-gray-900">{lot.totalSlots}</p>
                  <p className="text-xs text-gray-600">Total</p>
                </div>
                <div className="text-center p-2 bg-red-50 rounded-lg">
                  <p className="text-lg font-bold text-red-600">{lot.occupiedSlots}</p>
                  <p className="text-xs text-gray-600">Occupied</p>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <p className="text-lg font-bold text-blue-600">{lot.evSlots}</p>
                  <p className="text-xs text-gray-600">EV Slots</p>
                </div>
                <div className="text-center p-2 bg-emerald-50 rounded-lg">
                  <p className="text-lg font-bold text-emerald-600">₹{lot.pricing.hourly}</p>
                  <p className="text-xs text-gray-600">Per Hour</p>
                </div>
              </div>

              {/* Occupancy Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Occupancy</span>
                  <span className="font-medium">{Math.round((lot.occupiedSlots / lot.totalSlots) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.round((lot.occupiedSlots / lot.totalSlots) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  <span>Revenue: ₹{lot.todayRevenue?.toLocaleString()}/day</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    Details
                  </button>
                  <button 
                    onClick={() => setCurrentScreen('manageSlots')}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm hover:bg-emerald-200 transition-colors"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Add Parking Lot Screen
  const AddLotScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Add New Parking Lot" onBack={() => setCurrentScreen('parkingLots')} />
      
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Lot Name</label>
              <input
                type="text"
                value={newLot.name}
                onChange={(e) => setNewLot({...newLot, name: e.target.value})}
                placeholder="Downtown Plaza"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Location</label>
              <input
                type="text"
                value={newLot.location}
                onChange={(e) => setNewLot({...newLot, location: e.target.value})}
                placeholder="Koregaon Park, Pune"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Full Address</label>
              <textarea
                value={newLot.address}
                onChange={(e) => setNewLot({...newLot, address: e.target.value})}
                placeholder="Complete address with landmarks"
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Total Slots</label>
                <input
                  type="number"
                  value={newLot.totalSlots}
                  onChange={(e) => setNewLot({...newLot, totalSlots: e.target.value})}
                  placeholder="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">EV Slots</label>
                <input
                  type="number"
                  value={newLot.evSlots}
                  onChange={(e) => setNewLot({...newLot, evSlots: e.target.value})}
                  placeholder="20"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Hourly Rate (₹)</label>
                <input
                  type="number"
                  value={newLot.hourlyRate}
                  onChange={(e) => setNewLot({...newLot, hourlyRate: e.target.value})}
                  placeholder="50"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">EV Hourly Rate (₹)</label>
                <input
                  type="number"
                  value={newLot.evHourlyRate}
                  onChange={(e) => setNewLot({...newLot, evHourlyRate: e.target.value})}
                  placeholder="60"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Features</label>
              <div className="grid grid-cols-2 gap-2">
                {availableFeatures.map(feature => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newLot.features.includes(feature)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNewLot({...newLot, features: [...newLot.features, feature]});
                        } else {
                          setNewLot({...newLot, features: newLot.features.filter(f => f !== feature)});
                        }
                      }}
                      className="mr-2 rounded"
                    />
                    <span className="text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Contact Number</label>
              <input
                type="tel"
                value={newLot.contactNumber}
                onChange={(e) => setNewLot({...newLot, contactNumber: e.target.value})}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button 
              onClick={() => {
                if (newLot.name && newLot.location && newLot.totalSlots) {
                  const newParkingLot = {
                    id: parkingLots.length + 1,
                    name: newLot.name,
                    location: newLot.location,
                    address: newLot.address,
                    totalSlots: parseInt(newLot.totalSlots),
                    occupiedSlots: 0,
                    evSlots: parseInt(newLot.evSlots) || 0,
                    evOccupied: 0,
                    status: "active",
                    pricing: {
                      hourly: parseFloat(newLot.hourlyRate) || 0,
                      evHourly: parseFloat(newLot.evHourlyRate) || 0
                    },
                    features: newLot.features,
                    contactNumber: newLot.contactNumber,
                    monthlyRevenue: 0,
                    todayRevenue: 0
                  };
                  setParkingLots([...parkingLots, newParkingLot]);
                  setCurrentScreen('parkingLots');
                  setNewLot({
                    name: '', location: '', address: '', totalSlots: '', evSlots: '',
                    hourlyRate: '', evHourlyRate: '', features: [], contactNumber: ''
                  });
                }
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all"
            >
              Create Parking Lot
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Live Bookings Screen
  const LiveBookingsScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Live Bookings" onBack={() => setCurrentScreen('dashboard')} />
      
      <div className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Active Bookings</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
        </div>

        <div className="space-y-4">
          {bookings.filter(b => b.status === 'active').map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{booking.lotName}</h3>
                  <p className="text-sm text-gray-600">Slot: {booking.slot} • {booking.vehicle}</p>
                  <p className="text-sm text-gray-500">{booking.customerName}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-emerald-600">₹{booking.amount}</p>
                  <p className="text-sm text-gray-500">{booking.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Active since {booking.startTime}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200 transition-colors">
                    End Session
                  </button>
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Completions</h3>
          <div className="space-y-4">
            {bookings.filter(b => b.status === 'completed').map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 opacity-75">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">{booking.lotName}</h3>
                    <p className="text-sm text-gray-600">Slot: {booking.slot} • {booking.vehicle}</p>
                    <p className="text-sm text-gray-500">{booking.customerName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-600">₹{booking.amount}</p>
                    <p className="text-sm text-gray-500">{booking.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Completed at {booking.endTime}</span>
                  </div>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    View Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Analytics Screen
  const AnalyticsScreen = () => {
    const totalRevenue = parkingLots.reduce((sum, lot) => sum + (lot.monthlyRevenue || 0), 0);
    const todayRevenue = parkingLots.reduce((sum, lot) => sum + (lot.todayRevenue || 0), 0);
    
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <Header title="Revenue Analytics" onBack={() => setCurrentScreen('dashboard')} />
        
        <div className="p-4">
          {/* Revenue Summary */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-emerald-600">₹{todayRevenue.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Today's Revenue</p>
              <p className="text-xs text-green-600">+12.5% vs yesterday</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className="text-2xl font-bold text-blue-600">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <p className="text-xs text-blue-600">+8.3% vs last month</p>
            </div>
          </div>

          {/* Performance by Lot */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <h3 className="font-semibold mb-4 text-gray-800">Performance by Lot</h3>
            <div className="space-y-4">
              {parkingLots.map(lot => (
                <div key={lot.id}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-800">{lot.name}</h4>
                    <span className="text-emerald-600 font-semibold">₹{lot.monthlyRevenue?.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${(lot.monthlyRevenue / totalRevenue) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{Math.round((lot.occupiedSlots / lot.totalSlots) * 100)}% occupied</span>
                    <span>{((lot.monthlyRevenue / totalRevenue) * 100).toFixed(1)}% of total revenue</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-lg font-bold text-gray-800">{bookings.length}</p>
              <p className="text-sm text-gray-600">Total Bookings</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-lg font-bold text-gray-800">1,247</p>
              <p className="text-sm text-gray-600">Unique Customers</p>
            </div>
          </div>

          {/* Revenue Chart Placeholder */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-4 text-gray-800">Revenue Trend (Last 7 Days)</h3>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Revenue Chart</p>
                <p className="text-sm text-gray-500">Interactive chart would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Manage Slots Screen
  const ManageSlotsScreen = () => {
    const selectedLot = parkingLots[0]; // For demo purposes
    const slots = Array.from({ length: Math.min(selectedLot.totalSlots, 60) }, (_, i) => ({
      id: i + 1,
      number: `${String.fromCharCode(65 + Math.floor(i / 20))}-${(i % 20) + 1}`,
      status: i < selectedLot.occupiedSlots ? 'occupied' : 'available',
      type: i < selectedLot.evSlots ? 'ev' : 'regular',
      vehicle: i < selectedLot.occupiedSlots ? `MH 12 ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))} ${1000 + Math.floor(Math.random() * 9000)}` : null,
      startTime: i < selectedLot.occupiedSlots ? `${Math.floor(Math.random() * 12) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}` : null
    }));

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <Header title={`Manage Slots - ${selectedLot.name}`} onBack={() => setCurrentScreen('parkingLots')} />
        
        <div className="p-4">
          {/* Status Legend */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <h3 className="font-semibold mb-3 text-gray-800">Slot Status</h3>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>Available ({slots.filter(s => s.status === 'available').length})</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span>Occupied ({slots.filter(s => s.status === 'occupied').length})</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>EV Slots ({selectedLot.evSlots})</span>
              </div>
            </div>
          </div>

          {/* Slots Grid */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="grid grid-cols-6 gap-2">
              {slots.map(slot => (
                <div 
                  key={slot.id}
                  className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center text-xs font-medium cursor-pointer transition-all ${
                    slot.status === 'occupied' 
                      ? 'bg-red-100 border-red-300 text-red-800' 
                      : slot.type === 'ev' 
                        ? 'bg-blue-100 border-blue-300 text-blue-800' 
                        : 'bg-green-100 border-green-300 text-green-800'
                  }`}
                  onClick={() => {
                    if (slot.status === 'occupied') {
                      alert(`Slot ${slot.number}\nVehicle: ${slot.vehicle}\nStart Time: ${slot.startTime}`);
                    }
                  }}
                >
                  <span className="font-bold">{slot.number}</span>
                  {slot.type === 'ev' && <Zap className="w-3 h-3 mt-1" />}
                  {slot.status === 'occupied' && (
                    <Car className="w-3 h-3 mt-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Reserve Slot
            </button>
            <button className="bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Maintenance Mode
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Notifications Screen
  const NotificationsScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Notifications" onBack={() => setCurrentScreen('dashboard')} />
      
      <div className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Recent Notifications</h3>
          <button 
            onClick={() => setNotifications(notifications.map(n => ({...n, read: true})))}
            className="text-emerald-600 text-sm font-medium"
          >
            Mark All Read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className={`bg-white rounded-xl p-4 shadow-sm border ${
              notification.read ? 'border-gray-100' : 'border-emerald-200 bg-emerald-50'
            }`}>
              <div className="flex items-start space-x-3">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  notification.type === 'booking' ? 'bg-blue-500' : 
                  notification.type === 'payment' ? 'bg-green-500' : 'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-gray-800">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Profile Screen
  const ProfileScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Profile" onBack={() => setCurrentScreen('dashboard')} />
      
      <div className="p-4">
        {/* Profile Info */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{user?.name}</h3>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-gray-600">{user?.phone}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full font-medium">
                Verified Owner
              </span>
            </div>
          </div>
          
          <button className="w-full py-2 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Business Stats */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-semibold mb-4 text-gray-800">Business Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-600">{parkingLots.length}</p>
              <p className="text-sm text-gray-600">Parking Lots</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">3.2k</p>
              <p className="text-sm text-gray-600">Total Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">4.8</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">2.5 yr</p>
              <p className="text-sm text-gray-600">On Platform</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {[
            { icon: Settings, label: 'Account Settings', action: () => {} },
            { icon: Bell, label: 'Notification Settings', action: () => setCurrentScreen('notifications') },
            { icon: Wallet, label: 'Payment & Billing', action: () => {} },
            { icon: Shield, label: 'Security & Privacy', action: () => {} },
            { icon: HelpCircle, label: 'Help & Support', action: () => setCurrentScreen('support') },
            { icon: Star, label: 'Rate Our App', action: () => {} },
            { icon: LogOut, label: 'Logout', action: () => setCurrentScreen('login'), danger: true }
          ].map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className={`w-full flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                item.danger ? 'text-red-600' : 'text-gray-800'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-6 h-6 ${item.danger ? 'text-red-600' : 'text-gray-600'}`} />
                <span>{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Support Chat Screen
  const SupportChatScreen = () => {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([
      { id: 1, type: 'received', message: 'Hi! How can we help you with your parking business?', time: '2:30 PM' },
      { id: 2, type: 'sent', message: 'I need help with payment settlement', time: '2:31 PM' },
      { id: 3, type: 'received', message: 'I can help you with payment issues. What specific problem are you experiencing?', time: '2:32 PM' }
    ]);

    return (
      <div className="min-h-screen bg-gray-50 pb-20 flex flex-col">
        <Header title="Business Support" onBack={() => setCurrentScreen('dashboard')} />
        
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                  msg.type === 'sent' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white text-gray-800 shadow-sm'
                }`}>
                  <p>{msg.message}</p>
                  <p className={`text-xs mt-1 ${msg.type === 'sent' ? 'text-emerald-100' : 'text-gray-500'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button 
              onClick={() => {
                if (message.trim()) {
                  setChatMessages([...chatMessages, {
                    id: chatMessages.length + 1,
                    type: 'sent',
                    message: message,
                    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                  }]);
                  setMessage('');
                }
              }}
              className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Registration Screen
  const RegisterScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-emerald-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl max-h-screen overflow-y-auto">
        <div className="text-center mb-6">
          <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Register as Owner</h1>
          <p className="text-gray-600 text-sm">Start your parking business</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              placeholder="Your parking business name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Owner Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Create strong password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Business License</label>
            <input
              type="text"
              placeholder="Business registration number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={() => {
              setUser({ name: "Rajesh Kumar", email: "rajesh@parkinglot.com", phone: "+91 98765 43210" });
              setCurrentScreen('dashboard');
            }}
            className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-200"
          >
            Register & Start Business
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => setCurrentScreen('login')}
              className="text-teal-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  // Header Component
  const Header = ({ title, onBack }) => (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center space-x-3">
      <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronRight className="w-6 h-6 text-gray-600 rotate-180" />
      </button>
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
    </div>
  );

  // Bottom Navigation
  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {[
          { icon: Home, label: 'Dashboard', screen: 'dashboard' },
          { icon: Building, label: 'Lots', screen: 'parkingLots' },
          { icon: Activity, label: 'Live', screen: 'liveBookings' },
          { icon: BarChart3, label: 'Analytics', screen: 'analytics' },
          { icon: User, label: 'Profile', screen: 'profile' }
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => setCurrentScreen(item.screen)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              currentScreen === item.screen 
                ? 'text-emerald-600 bg-emerald-50' 
                : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login': return <LoginScreen />;
      case 'register': return <RegisterScreen />;
      case 'dashboard': return <DashboardScreen />;
      case 'parkingLots': return <ParkingLotsScreen />;
      case 'addLot': return <AddLotScreen />;
      case 'liveBookings': return <LiveBookingsScreen />;
      case 'analytics': return <AnalyticsScreen />;
      case 'manageSlots': return <ManageSlotsScreen />;
      case 'notifications': return <NotificationsScreen />;
      case 'support': return <SupportChatScreen />;
      case 'profile': return <ProfileScreen />;
      default: return <DashboardScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen relative overflow-hidden">
      {renderScreen()}
    </div>
  );
};

export default ParkingOwnerApp;