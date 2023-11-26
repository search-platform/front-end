interface IconChevronDownProps {
  className?: string;
}

function IconChevronDown ({ className }: IconChevronDownProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="#000000" className={className}>
      <rect width="16" height="16" transform="translate(0 0.5)" fill="#000000" fillOpacity="0.01"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.34426 7.06859C3.54572 6.8537 3.88324 6.84282 4.09812 7.04427L8.00001 10.7023L11.9019 7.04427C12.1168 6.84282 12.4543 6.8537 12.6558 7.06859C12.8572 7.28348 12.8463 7.621 12.6315 7.82245L8.36478 11.8225C8.15963 12.0148 7.8404 12.0148 7.63525 11.8225L3.36858 7.82245C3.15369 7.621 3.14281 7.28348 3.34426 7.06859Z" fill="#000000"/>
    </svg>
  );
}

export default IconChevronDown;
