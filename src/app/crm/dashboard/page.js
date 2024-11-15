"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Users,
  Target,
  CheckCircle,
  DollarSign,
  PhoneCall,
  Mail,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    totalContacts: 0,
    newLeads: 0,
    tasksToday: 0,
    totalRevenue: 0,
  });
  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);
  const [leads, setLeads] = useState([]);
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setMetrics({
          totalContacts: 1230,
          newLeads: 45,
          tasksToday: 12,
          totalRevenue: 523000,
        });

        setTasks([
          {
            id: 1,
            title: "Follow up with John",
            due: "2 PM",
            status: "pending",
            completed: false,
          },
          {
            id: 2,
            title: "Prepare proposal for XYZ",
            due: "4 PM",
            status: "in-progress",
            completed: false,
          },
          {
            id: 3,
            title: "Call Sarah about her inquiry",
            due: "6 PM",
            status: "pending",
            completed: false,
          },
        ]);

        setActivities([
          {
            id: 1,
            description: "New lead added: Jane Doe",
            time: "Just now",
            type: "lead",
          },
          {
            id: 2,
            description: "Task completed: Call with Michael",
            time: "5 minutes ago",
            type: "task",
          },
          {
            id: 3,
            description: "New contact: David Smith",
            time: "30 minutes ago",
            type: "contact",
          },
          {
            id: 4,
            description: "Deal closed: ABC Corp",
            time: "1 hour ago",
            type: "deal",
          },
        ]);

        setLeads([
          {
            id: 1,
            name: "Alice Johnson",
            company: "Tech Inc",
            value: 50000,
            stage: "Qualified",
          },
          {
            id: 2,
            name: "Bob Smith",
            company: "Marketing Co",
            value: 75000,
            stage: "Proposal",
          },
          {
            id: 3,
            name: "Charlie Brown",
            company: "Sales Ltd",
            value: 100000,
            stage: "Negotiation",
          },
        ]);

        setCommunications([
          {
            id: 1,
            type: "call",
            contact: "Alice Johnson",
            date: "2023-05-15",
            duration: "15 mins",
          },
          {
            id: 2,
            type: "email",
            contact: "Bob Smith",
            date: "2023-05-14",
            subject: "Proposal Follow-up",
          },
          {
            id: 3,
            type: "call",
            contact: "Charlie Brown",
            date: "2023-05-13",
            duration: "30 mins",
          },
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    { day: "Mon", tasks: 5 },
    { day: "Tue", tasks: 3 },
    { day: "Wed", tasks: 4 },
    { day: "Thu", tasks: 6 },
    { day: "Fri", tasks: 7 },
    { day: "Sat", tasks: 2 },
    { day: "Sun", tasks: 5 },
  ];

  const pipelineData = [
    { name: "New", value: 30 },
    { name: "Qualified", value: 25 },
    { name: "Proposal", value: 20 },
    { name: "Negotiation", value: 15 },
    { name: "Closed", value: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const MetricCard = ({ title, value, icon: Icon }) => (
    <Card>
      <CardContent className="flex items-center justify-between pt-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-muted-foreground" />
      </CardContent>
    </Card>
  );

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getActivityBadge = (type) => {
    switch (type) {
      case "lead":
        return <Badge variant="secondary">Lead</Badge>;
      case "task":
        return <Badge>Task</Badge>;
      case "contact":
        return <Badge variant="outline">Contact</Badge>;
      case "deal":
        return <Badge variant="destructive">Deal</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">CRM Dashboard</h1>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
          <span className="sr-only">Notifications</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Contacts"
          value={loading ? "-" : metrics.totalContacts}
          icon={Users}
        />
        <MetricCard
          title="New Leads"
          value={loading ? "-" : metrics.newLeads}
          icon={Target}
        />
        <MetricCard
          title="Tasks Today"
          value={loading ? "-" : metrics.tasksToday}
          icon={CheckCircle}
        />
        <MetricCard
          title="Total Revenue"
          value={loading ? "-" : `$${metrics.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Tasks Completed Over the Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="tasks" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pipelineData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pipelineData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {pipelineData.map((entry, index) => (
                <div key={entry.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTaskStatus(task.id)}
                      aria-label={`Mark ${task.title} as ${
                        task.completed ? "incomplete" : "complete"
                      }`}
                    />
                    <span
                      className={
                        task.completed
                          ? "line-through text-muted-foreground"
                          : ""
                      }
                    >
                      {task.title}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant="outline"
                      className={getStatusColor(task.status)}
                    >
                      {task.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {task.due}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li
                  key={activity.id}
                  className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {getActivityBadge(activity.type)}
                    <span>{activity.description}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {activity.time}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {leads.map((lead) => (
                <li
                  key={lead.id}
                  className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors"
                >
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {lead.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      ${lead.value.toLocaleString()}
                    </p>
                    <Badge variant="outline">{lead.stage}</Badge>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Communications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {communications.map((comm) => (
                <li
                  key={comm.id}
                  className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${comm.contact}`}
                        alt={comm.contact}
                      />
                      <AvatarFallback>
                        {comm.contact
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{comm.contact}</p>
                      <p className="text-sm text-muted-foreground">
                        {comm.type === "call" ? comm.duration : comm.subject}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {comm.type === "call" ? (
                      <PhoneCall className="h-4 w-4 text-green-500" />
                    ) : (
                      <Mail className="h-4 w-4 text-blue-500" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {comm.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
