import React from "react";
import "./Sidebar.css";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";

import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PlusIcon from "./plusIcon";
import { useNavigate } from "react-router-dom";
import SocialMedia from "../../Footer/SocialMedia/SocialMedia";

export function SidebarWithBurgerMenu({ inHomePage }) {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
    setIsDrawerOpen(false);
  };
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const navigate = useNavigate();

  const accordionList = [
    { name: "Wolsey", path: "/wolsey", section: "architecture" },
    { name: "MHCEG", path: "/mhceg", section: "engineer" },
    { name: "Kaller", path: "/kaller", section: "engineer" },
    {
      name: "Datta And Tayefi",
      path: "/datta-and-tayefi",
      section: "engineer",
    },
    {
      name: "Mosaic Real Estate",
      path: "/mosaic-realState",
      section: "engineer",
    },
    {
      name: "Indigenous Mosaic",
      path: "/indigenous-mosaic",
      section: "engineer",
    },
  ];

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon
            className={`h-8 w-8 stroke-2 ${inHomePage && "text-white"}`}
          />
        )}
      </IconButton>
      <Drawer
        placement="right"
        className={`p-0  bg-black ${isDrawerOpen ? "w-full" : "w-auto"}`}
        style={{ width: isDrawerOpen ? "80vw" : "auto" }}
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <List>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-house text-xl pe-2"></i> HOME
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            {/* <Accordion open={open === 2}>
              <ListItem
                className={`p-0 item mainItem hover:bg-transparent ${
                  open === 2 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3 px-0 !hover:text-mainGold"
                >
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon transition-transform`}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="white"
                    onClick={() =>
                      handleNavigate("/who-we-are", "firstSection")
                    }
                    className={`mr-auto itemText font-normal ${
                      open === 2 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-gears text-xl pe-2"></i> WHO WE
                    ARE
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 !text-gray-500">
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() => handleNavigate("/who-we-are", "values")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Our values
                  </ListItem>
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() => handleNavigate("/who-we-are", "journey")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Our journey
                  </ListItem>
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() => handleNavigate("/who-we-are", "investment")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Investment
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion> */}
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      handleNavigate("/who-we-are", "firstSection");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    {/* <i className="fa-solid fa-sack-dollar "></i>  */}
                    <i className="fa-solid fa-gears text-xl pe-2"></i> WHO WE
                    ARE{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            {/* <Accordion open={open === 3}>
              <ListItem
                className={`p-0 item mainItem hover:bg-transparent ${open === 3 ? "bg-transparent" : "bg-transparent"
                  }`}
                selected={open === 3}
              >
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3 px-0 !hover:text-mainGold"
                >
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon transition-transform`}
                      condition={open == 3}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="white"
                    onClick={() =>
                      handleNavigate("/industries", "architechture")
                    }
                    className={`mr-auto itemText font-normal ${open === 3 ? "text-mainGold" : ""
                      }`}
                  >
                  <i className="fa-solid fa-industry text-xl pe-2"></i>  INDUSTRIES
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 !text-gray-500">
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() =>
                      handleNavigate("/industries", "architechture")
                    }
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Architecture and Urban planning                  </ListItem>
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() => handleNavigate("/industries", "engineer")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Engineering
                  </ListItem>
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() => handleNavigate("/industries", "oil")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Oil & Gas
                  </ListItem>
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() => handleNavigate("/industries", "marine")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Marine and Offshore Structures
                  </ListItem>
                  <ListItem
                    className="hover:bg-mainGold hover:text-white"
                    onClick={() => handleNavigate("/industries", "energy")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Energy Management
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion> */}
            <Accordion open={open === 4}>
              <ListItem
                className={`p-0 item mainItem hover:bg-transparent ${
                  open === 4 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 4}
              >
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-b-0 p-3 px-0  !hover:text-mainGold"
                >
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon transition-transform`}
                      condition={open == 4}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="white"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/holdings");
                      setIsDrawerOpen(false);
                    }}
                    className={`mr-auto itemText font-normal ${
                      open === 4 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-hand-holding-dollar text-xl pe-2"></i>{" "}
                    HOLDINGS
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0  !text-gray-500">
                  {accordionList &&
                    accordionList.map((item) => (
                      <ListItem
                        key={item.name}
                        className="hover:bg-mainGold hover:text-white"
                        onClick={() => handleNavigate(item.path, item.section)}
                      >
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5 opacity-0"
                          />
                        </ListItemPrefix>
                        {item.name}
                      </ListItem>
                    ))}
                </List>
              </AccordionBody>
            </Accordion>

            {/* <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      handleNavigate("/our-projects", "architechture");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    
                    <i className="fa-solid fa-diagram-project text-xl pe-2"></i>{" "}
                    PROJECTS{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion> */}

            {/* <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${open != 1 ? "bg-transparent" : "bg-transparent"
                  }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      handleNavigate("/investment-approach", "firstSection")
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${open === 1 ? "text-mainGold" : ""
                      }`}
                  >
                  
                   INVESTMENT APPROACH{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion> */}
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      handleNavigate("/News", "firstSection");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-envelope text-xl pe-2"></i> NEWS{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      handleNavigate("/services", "firstSection");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    {/* <i className="fa-solid fa-sack-dollar "></i>  */}
                    <i className="fa-solid fa-diagram-project text-xl pe-2"></i> SERVICES{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/career");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-person-running text-xl pe-2"></i>{" "}
                    CAREER{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>

            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/contact-us");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-earth-asia text-xl pe-2"></i>{" "}
                    CONTACT US
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* <AccordionBody className="py-1">
                <List className="p-0  ">
                  <ListItem
                    className={`${
                      open == 2 ? "bg-transparent" : "bg-transparent"
                    } hover:bg-transparen !text-gray-500 `}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5  opacity-0  "
                      />
                    </ListItemPrefix>
                    Management team
                  </ListItem>
                </List>
              </AccordionBody> */}
            </Accordion>
            <hr className="my-2 border-white-50 " />
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={() => handleNavigate("/privacy-policy")}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    Privacy Policy
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={() => handleNavigate("/terms-conditions")}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    Terms and conditions
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <hr className="my-2 border-white-50 mb-10" />
            <SocialMedia />
          </List>
        </Card>
      </Drawer>
    </>
  );
}
