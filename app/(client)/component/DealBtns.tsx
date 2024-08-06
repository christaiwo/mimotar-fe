"use client";
import React, { useState } from "react";
import AuthForm from "@/app/auth/AuthForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PrimaryButton from "@/app/commons/PrimaryButtons";

const DealBtns = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const handleDialogChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const handleOpen = (tab: "login" | "register") => {
    setActiveTab(tab);
    setOpen(true);
  };
  return (
    <div className="flex gap-6">
      <Button
        onClick={() => handleOpen("register")}
        className="w-[143px] h-[64px] text-[#D946EF] hover:text-[#F8FAFC] font-bold   border-[#D946EF] border-2 bg-white rounded-lg hover:bg-[#D946EF] active:bg-[#A21CAF] active:font-bold focus:bg-[#A21CAF] focus:font-bold"
      >
        Register
      </Button>
      <AuthForm
        open={open}
        setOpen={handleDialogChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Link href={"/generate-link"}>
        <PrimaryButton type="button">Get paid/Pay someone</PrimaryButton>
      </Link>
    </div>
  );
};

export default DealBtns;
