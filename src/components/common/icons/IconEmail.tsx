interface IconProps {
  className?: string;
}

function IconEmail ({className}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none" className={className}>
      <path d="M10.625 2.6875H4.375C2.5 2.6875 1.25 3.625 1.25 5.8125V10.1875C1.25 12.375 2.5 13.3125 4.375 13.3125H10.625C12.5 13.3125 13.75 12.375 13.75 10.1875V5.8125C13.75 3.625 12.5 2.6875 10.625 2.6875ZM10.9187 6.49375L8.9625 8.05625C8.55 8.3875 8.025 8.55 7.5 8.55C6.975 8.55 6.44375 8.3875 6.0375 8.05625L4.08125 6.49375C3.88125 6.33125 3.85 6.03125 4.00625 5.83125C4.16875 5.63125 4.4625 5.59375 4.6625 5.75625L6.61875 7.31875C7.09375 7.7 7.9 7.7 8.375 7.31875L10.3313 5.75625C10.5312 5.59375 10.8313 5.625 10.9875 5.83125C11.15 6.03125 11.1187 6.33125 10.9187 6.49375Z" fill="#6E56CF"/>
    </svg>
  );
}

export default IconEmail;
