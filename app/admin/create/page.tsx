import React from "react";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import WarningText from "@/app/components/WarningText";
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/containers/AuthContainer";

const CreateProduct = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
      <WarningText text="You do not have the necessary permissions to access this page." />
    );
  }
  return (
    <AuthContainer>
      <CreateForm />
    </AuthContainer>
  );
};

export default CreateProduct;
