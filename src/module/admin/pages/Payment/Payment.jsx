// PaymentTable.jsx
import React, { useState } from "react";
import {
  Container,
  HeaderRow,
  Title,
  SortByContainer,
  SortLabel,
  SortSelect,
  TableWrapper,
  StyledTable,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  StatusCell,
  BottomRow,
  PageInfo,
  Pagination,
  PageButton,
} from "../Payment/Payment.style";

// Example mock data for the table
const mockData = [
  {
    id: 1,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Active",
  },
  {
    id: 2,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Failed",
  },
  {
    id: 3,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Pending",
  },
  {
    id: 4,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Active",
  },
  {
    id: 5,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Active",
  },
  {
    id: 6,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Failed",
  },
  {
    id: 7,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Active",
  },
  {
    id: 8,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Pending",
  },
  {
    id: 9,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Active",
  },
  {
    id: 10,
    courseName: "CLAT Coaching",
    studentName: "Gaurav N",
    paymentID: "#913619",
    amount: 699,
    dateOfPayment: "24-07-2024 16:22",
    modeOfPayment: "UPI",
    status: "Active",
  },
];

// const TOTAL_ENTRIES = 100;
const ITEMS_PER_PAGE = 10;

export default function Payment() {
  const [currentPage, setCurrentPage] = useState(1);

  const TOTAL_ENTRIES = mockData.length;
  const totalPages = Math.ceil(TOTAL_ENTRIES / ITEMS_PER_PAGE);

  // Calculate the data slice for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = mockData.slice(startIndex, endIndex);

  // Simple pagination logic
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <Container>
      {/* Table Header */}
      <HeaderRow>
        <Title>All Payment  <span style={{ color: "#6d6e75",
            fontSize: "12px",
            fontWeight: "400" }}>({currentItems.length}/{TOTAL_ENTRIES})</span></Title>
        <SortByContainer>
          <SortLabel>Sort by:</SortLabel>
          <SortSelect value="Time" onChange={() => {}}>
            <option value="Time">Time</option>
            <option value="Amount">Amount</option>
            <option value="Status">Status</option>
          </SortSelect>
        </SortByContainer>
      </HeaderRow>

      {/* Table */}
      <TableWrapper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeader>Course Name</TableHeader>
              <TableHeader>Student Name</TableHeader>
              <TableHeader>Payment ID</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Date of Payment</TableHeader>
              <TableHeader>Mode of Payment</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.courseName}</TableCell>
                <TableCell>{item.studentName}</TableCell>
                <TableCell>{item.paymentID}</TableCell>
                <TableCell>₹{item.amount}</TableCell>
                <TableCell>{item.dateOfPayment}</TableCell>
                <TableCell>{item.modeOfPayment}</TableCell>
                {/* For status we use StatusCell to color-code the text */}
                <StatusCell status={item.status}>{item.status}</StatusCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableWrapper>

      {/* Pagination and Info */}
      <BottomRow>
        <PageInfo>
          Showing {startIndex + 1}-{Math.min(endIndex, TOTAL_ENTRIES)} from{" "}
          {TOTAL_ENTRIES}
        </PageInfo>
        <Pagination>
          {pages.map((page) => (
            <PageButton
              key={page}
              className={page === currentPage ? "active" : ""}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PageButton>
          ))}
        </Pagination>
      </BottomRow>
    </Container>
  );
}
