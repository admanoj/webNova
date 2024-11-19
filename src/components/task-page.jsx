"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle, Search } from "lucide-react";

export function TaskPageComponent() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: "Contact new lead",
      status: "To Do",
      dueDate: "2023-06-15",
      assignee: "John Doe",
    },
    {
      id: 2,
      title: "Prepare sales presentation",
      status: "In Progress",
      dueDate: "2023-06-18",
      assignee: "Jane Smith",
    },
    {
      id: 3,
      title: "Follow up with client",
      status: "Completed",
      dueDate: "2023-06-10",
      assignee: "John Doe",
    },
  ]);

  const [newTask, setNewTask] = React.useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: tasks.length + 1,
        title: newTask,
        status: "To Do",
        dueDate: new Date().toISOString().split("T")[0],
        assignee: "Unassigned",
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search tasks..."
                    className="w-64 mr-2"
                  />
                  <Button variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="New task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="w-64 mr-2"
                  />
                  <Button onClick={addTask}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Assignee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>{task.assignee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
