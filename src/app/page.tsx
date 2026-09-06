"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutSection } from "@/components/AboutSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>("Train Ticket");
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>(undefined);
  const [initialDetails, setInitialDetails] = useState<
    { from?: string; to?: string; date?: string } | undefined
  >(undefined);

  const handleOpenBooking = (
    serviceName?: string,
    vehicleOrDetails?: string | { from?: string; to?: string; date?: string }
  ) => {
    if (typeof vehicleOrDetails === "string") {
      setSelectedVehicle(vehicleOrDetails);
      setInitialDetails(undefined);
    } else if (typeof vehicleOrDetails === "object") {
      setInitialDetails(vehicleOrDetails);
      setSelectedVehicle(undefined);
    } else {
      setSelectedVehicle(undefined);
      setInitialDetails(undefined);
    }

    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService("Train Ticket");
    }

    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Travel Montage and Quick Enquiry */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 2. Services Section (Train, Flight, Four-Wheeler) */}
        <ServicesSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 3. Dedicated Four-Wheeler Section (5 Categories) */}
        <VehiclesSection onOpenBooking={(service, vehicle) => handleOpenBooking(service, vehicle)} />

        {/* 4. Why Choose Us (7 Trust Factors) */}
        <WhyChooseUs />

        {/* 5. About Us (Concise local introduction) */}
        <AboutSection />

        {/* 6. Location Section (Map & Address) */}
        <LocationSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Contact Section (8-field enquiry form) */}
        <ContactSection />
      </main>

      {/* Floating Action Button */}
      <FloatingCTA onOpenBooking={() => handleOpenBooking()} />

      {/* Reusable Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
        defaultVehicle={selectedVehicle}
        initialDetails={initialDetails}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
