import { Icon } from "@chakra-ui/react";
import React from "react";

const SocialShare = (props) => (
  <Icon fill="currentcolor" viewBox="0 0 44 44" boxSize={{base:'25px', md:'44px'}} {...props}>
    <path 
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.7 22.3499C34.95 20.1499 36.85 18.4499 39.1 18.4499C41.55 18.4499 43.5499 20.4499 43.5499 22.8999C43.5499 25.3499 41.55 27.3499 39.1 27.3499C36.85 27.3499 34.95 25.6499 34.7 23.4499H26.25C26.15 24.7999 25.6 25.9999 24.8 26.9499L29.1 31.2499C29.8 30.6999 30.65 30.3999 31.55 30.3999C33.7999 30.3999 35.6 32.1999 35.6 34.4499C35.6 36.6999 33.7999 38.4999 31.55 38.4999C29.3 38.4999 27.5 36.6999 27.5 34.4499C27.5 33.4999 27.85 32.6999 28.35 31.9999L24.05 27.6999C23.1 28.4999 21.9 29.0499 20.55 29.1499V33.4999C22.8 33.7499 24.55 35.6999 24.55 37.9999C24.55 40.4999 22.5 42.5499 20 42.5499C17.5 42.5499 15.45 40.4999 15.45 37.9999C15.45 35.6999 17.2 33.7499 19.45 33.4999V29.1499C18.1 29.0499 16.9 28.4999 15.95 27.6999L8.64995 34.9999C8.94995 35.4499 9.09995 35.8999 9.09995 36.4499C9.09995 37.8999 7.89995 39.0999 6.44995 39.0999C4.99995 39.0999 3.79995 37.8999 3.79995 36.4499C3.79995 34.9999 4.99995 33.7999 6.44995 33.7999C6.99995 33.7999 7.49995 33.9999 7.89995 34.2499L15.15 26.8999C14.35 25.9499 13.8 24.7499 13.7 23.3999H9.84995C9.59995 25.0499 8.14995 26.2999 6.44995 26.2999C4.54995 26.2999 2.99995 24.7499 2.99995 22.8499C2.99995 20.9499 4.54995 19.3999 6.44995 19.3999C8.14995 19.3999 9.59995 20.6499 9.84995 22.2999H13.7C13.8 20.9499 14.35 19.7499 15.15 18.7999L10.3 13.9499C9.24995 14.8499 7.89995 15.3499 6.44995 15.3499C3.14995 15.3499 0.449951 12.6499 0.449951 9.3499C0.449951 6.0499 3.14995 3.3499 6.44995 3.3499C9.74995 3.3499 12.45 6.0499 12.45 9.3499C12.45 10.7999 11.9 12.1499 11.05 13.1999L15.9 18.0499C16.85 17.2499 18.05 16.6999 19.4 16.5999V7.0499C17.8 6.7999 16.6 5.3999 16.6 3.7499C16.6 1.8999 18.1 0.399902 19.95 0.399902C21.8 0.399902 23.3 1.8999 23.3 3.7499C23.3 5.3999 22.1 6.7999 20.5 7.0499V16.5999C21.85 16.6999 23.0499 17.2499 24 18.0499L25.5 16.5499C25.15 16.0499 24.95 15.3999 24.95 14.7499C24.95 12.9999 26.35 11.5999 28.1 11.5999C29.85 11.5999 31.25 12.9999 31.25 14.7499C31.25 16.4999 29.85 17.8999 28.1 17.8999C27.45 17.8999 26.8 17.6999 26.3 17.3499L24.8 18.8499C25.6 19.7999 26.15 20.9999 26.25 22.3499H34.7ZM35.75 22.8999C35.75 24.7499 37.25 26.2499 39.0999 26.2499C40.95 26.2499 42.45 24.7499 42.45 22.8999C42.45 21.0499 40.95 19.5499 39.0999 19.5499C37.25 19.5499 35.75 21.0499 35.75 22.8999ZM25.2 22.8999C25.2 25.7499 22.85 28.0999 20 28.0999C17.15 28.0999 14.8 25.7499 14.8 22.8999C14.8 20.0499 17.15 17.6999 20 17.6999C22.85 17.6999 25.2 20.0499 25.2 22.8999ZM28.1 12.6999C26.95 12.6999 26.05 13.5999 26.05 14.7499C26.05 15.8999 27 16.7999 28.1 16.7999C29.25 16.7999 30.15 15.8999 30.15 14.7499C30.15 13.5999 29.25 12.6999 28.1 12.6999ZM20 1.4999C21.25 1.4999 22.25 2.4999 22.25 3.7499C22.25 4.9999 21.2 5.9999 20 5.9999C18.75 5.9999 17.75 4.9999 17.75 3.7499C17.75 2.4999 18.75 1.4999 20 1.4999ZM6.44995 4.4499C3.74995 4.4499 1.54995 6.6499 1.54995 9.3499C1.54995 12.0499 3.74995 14.2499 6.44995 14.2499C9.14995 14.2499 11.35 12.0499 11.35 9.3499C11.35 6.6499 9.14995 4.4499 6.44995 4.4499ZM8.79995 22.8999C8.79995 24.1999 7.74995 25.2499 6.44995 25.2499C5.14995 25.2499 4.09995 24.1999 4.09995 22.8999C4.09995 21.5999 5.14995 20.5499 6.44995 20.5499C7.74995 20.5499 8.79995 21.5999 8.79995 22.8999ZM6.44995 37.9999C7.29995 37.9999 7.99995 37.2999 7.99995 36.4499C7.99995 35.5999 7.29995 34.8999 6.44995 34.8999C5.59995 34.8999 4.89995 35.5999 4.89995 36.4499C4.89995 37.2999 5.59995 37.9999 6.44995 37.9999ZM20 41.4999C18.1 41.4999 16.55 39.9499 16.55 38.0499C16.55 36.1499 18.1 34.5999 20 34.5999C21.9 34.5999 23.45 36.1499 23.45 38.0499C23.45 39.9499 21.9 41.4999 20 41.4999ZM31.55 31.4999C29.9 31.4999 28.6 32.8499 28.6 34.4499C28.6 36.0499 29.9 37.3999 31.55 37.3999C33.2 37.3999 34.5 36.0499 34.5 34.4499C34.5 32.7999 33.15 31.4999 31.55 31.4999Z"
      fill="black"
    />
  </Icon>
);

export default SocialShare;