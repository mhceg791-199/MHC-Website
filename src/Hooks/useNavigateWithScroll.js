import { useNavigate } from "react-router-dom";

const useNavigateWithScroll = () => {
  const navigate = useNavigate();

  const handelNavigate = (pageName, section) => {
    
    navigate(pageName, { state: { scrollTo: section } });
  };

return handelNavigate;
};

export default useNavigateWithScroll;
