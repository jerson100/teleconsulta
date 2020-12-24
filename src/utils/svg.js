import Icon from "@ant-design/icons";

const LocationSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "#4b6cb7", transform: "filter" }}
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M13,4.069V2h-2v2.069C7.389,4.522,4.523,7.389,4.069,11H2v2h2.069c0.454,3.611,3.319,6.478,6.931,6.931V22h2v-2.069 c3.611-0.453,6.478-3.319,6.931-6.931H22v-2h-2.069C19.478,7.389,16.611,4.522,13,4.069z M12,18c-3.309,0-6-2.691-6-6s2.691-6,6-6 s6,2.691,6,6S15.309,18,12,18z"></path>
  </svg>
);
const ZoomSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "#4b6cb7", transform: "filter" }}
  >
    <path d="M1.984,7.506v6.74c0.006,1.524,1.361,2.75,3.014,2.745h10.693c0.303,0,0.549-0.225,0.549-0.498V9.753 c-0.008-1.523-1.363-2.75-3.014-2.744H2.531C2.229,7.009,1.984,7.233,1.984,7.506z M16.92,10.136l4.416-2.963 c0.383-0.292,0.68-0.219,0.68,0.309v9.036c0,0.601-0.363,0.528-0.68,0.309L16.92,13.87V10.136z"></path>
  </svg>
);

const DateSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ transform: "filter" }}
  >
    <path d="M7 11H9V13H7zM7 15H9V17H7zM11 11H13V13H11zM11 15H13V17H11zM15 11H17V13H15zM15 15H17V17H15z"></path>
    <path d="M5,22h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12 C3,21.103,3.897,22,5,22z M19,8l0.001,12H5V8H19z"></path>
  </svg>
);

const PlusMedicalSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "rgba(0, 0, 0, 1)", transform: "filter" }}
  >
    <path d="M15 2.013L9 2.013 9 9 2 9 2 15 9 15 9 21.987 15 21.987 15 15 22 15 22 9 15 9z"></path>
  </svg>
);

const CommentDetailSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "rgba(0, 0, 0, 1)", transform: "filter" }}
  >
    <path d="M7 7H17V9H7zM7 11H14V13H7z"></path>
    <path d="M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z"></path>
  </svg>
);
const MoneylSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "rgba(0, 0, 0, 1)", transform: "filter" }}
  >
    <path d="M21,4H3C2.447,4,2,4.447,2,5v14c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V5C22,4.447,21.553,4,21,4z M20,15 c-1.657,0-3,1.343-3,3H7c0-1.657-1.343-3-3-3V9c1.657,0,3-1.343,3-3h10c0,1.657,1.343,3,3,3V15z"></path>
    <path d="M12,8c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S14.206,8,12,8z M12,14c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S13.103,14,12,14z"></path>
  </svg>
);

const LocationIcon = (props) => <Icon component={LocationSVG} {...props} />;
const DateIcon = (props) => <Icon component={DateSVG} {...props} />;
const PlusMedicalIcon = (props) => (
  <Icon component={PlusMedicalSvg} {...props} />
);
const CommentDetailIcon = (props) => (
  <Icon component={CommentDetailSvg} {...props} />
);
const MoneylIcon = (props) => <Icon component={MoneylSvg} {...props} />;
const ZoomIcon = (props) => <Icon component={ZoomSVG} {...props} />;

export {
  LocationIcon,
  DateIcon,
  PlusMedicalIcon,
  CommentDetailIcon,
  MoneylIcon,
  ZoomIcon,
};
