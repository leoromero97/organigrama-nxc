import { IComponentIconProps } from "./types";

const IcClose = ({ className }: IComponentIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.86364 5.86361C6.21511 5.51213 6.78496 5.51213 7.13643 5.86361L18.1364 16.8636C18.4879 17.2151 18.4879 17.7849 18.1364 18.1364C17.785 18.4879 17.2151 18.4879 16.8636 18.1364L5.86364 7.1364C5.51217 6.78492 5.51217 6.21508 5.86364 5.86361Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.86364 18.1364C5.51217 17.7849 5.51217 17.215 5.86364 16.8636L16.8636 5.86358C17.2151 5.51211 17.785 5.51211 18.1364 5.86358C18.4879 6.21505 18.4879 6.7849 18.1364 7.13637L7.13643 18.1364C6.78496 18.4878 6.21511 18.4878 5.86364 18.1364Z"
      fill="currentColor"
    />
  </svg>
);

export default IcClose;
