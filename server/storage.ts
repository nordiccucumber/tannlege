import { users, appointments, contactMessages, type User, type InsertUser, type Appointment, type InsertAppointment, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAppointments(): Promise<Appointment[]>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentAppointmentId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentAppointmentId = 1;
    this.currentContactMessageId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = { 
      ...insertAppointment, 
      id, 
      message: insertAppointment.message || null,
      createdAt: new Date() 
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = { 
      id, 
      firstName: insertMessage.firstName,
      lastName: insertMessage.lastName || null,
      email: insertMessage.email,
      phone: insertMessage.phone || null,
      message: insertMessage.message,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
