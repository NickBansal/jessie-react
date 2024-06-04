import React from "react";
import styled from "styled-components";

const Link = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => <a className={className}>{children}</a>;

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;

export default function App() {
  return (
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  );
}
