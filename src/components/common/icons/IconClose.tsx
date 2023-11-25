interface IconProps {
  className?: string;
}

function IconClose ({className}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect width="16" height="16" fill="white" fillOpacity="0.01"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.567 4.30044C12.8066 4.06092 12.8066 3.67258 12.567 3.43306C12.3275 3.19354 11.9392 3.19354 11.6997 3.43306L8.00003 7.13271L4.30039 3.43306C4.06086 3.19354 3.67252 3.19354 3.433 3.43306C3.19348 3.67258 3.19348 4.06092 3.433 4.30044L7.13264 8.00009L3.433 11.6997C3.19348 11.9393 3.19348 12.3276 3.433 12.5671C3.67252 12.8066 4.06086 12.8066 4.30039 12.5671L8.00003 8.86747L11.6997 12.5671C11.9392 12.8066 12.3275 12.8066 12.567 12.5671C12.8066 12.3276 12.8066 11.9393 12.567 11.6997L8.86741 8.00009L12.567 4.30044Z" fill="white"/>
    </svg>
  );
}

export default IconClose;
