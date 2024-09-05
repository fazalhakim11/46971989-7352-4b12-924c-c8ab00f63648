import { useState } from "react";
import useFetch from "./useGetData";

const useHandleSortBy = () => {
  const { sortBy, goToPage } = useFetch();
  const [order, setOrder] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [showLast, setShowLast] = useState(false);
  const [showPosition, setShowPosition] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const handleSortBy = (value: any) => {
    switch (value) {
      case "firstName":
        setShowFirst(true);
        setShowLast(false);
        setShowPosition(false);
        setShowPhone(false);
        setShowEmail(false);
        break;
      case "lastName":
        setShowFirst(false);
        setShowLast(true);
        setShowPosition(false);
        setShowPhone(false);
        setShowEmail(false);
        break;
      case "position":
        setShowFirst(false);
        setShowLast(false);
        setShowPosition(true);
        setShowPhone(false);
        setShowEmail(false);
        break;
      case "phone":
        setShowFirst(false);
        setShowLast(false);
        setShowPosition(false);
        setShowPhone(true);
        setShowEmail(false);
        break;
      case "email":
        setShowFirst(false);
        setShowLast(false);
        setShowPosition(false);
        setShowPhone(false);
        setShowEmail(true);
        break;
      default:
        setShowFirst(false);
        setShowLast(false);
        setShowPosition(false);
        setShowPhone(false);
        setShowEmail(false);
        break;
    }
    setOrder(!order);
    if (order) {
      const orderBy = "asc";
      sortBy(value, orderBy);
    } else {
      const orderBy = "desc";
      sortBy(value, orderBy);
    }
  };
  return {
    sortBy,
    order,
    showFirst,
    showLast,
    showPosition,
    showPhone,
    showEmail,
    handleSortBy,
  };
};

export default useHandleSortBy;
