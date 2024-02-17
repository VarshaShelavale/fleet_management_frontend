// function Invoice() {
//   return (
//     <div>
//       <MDBCard className="p-4">
//         <MDBCardBody>
//           <MDBContainer className="mb-2 mt-3">
//             <MDBRow className="d-flex align-items-baseline">
//               <MDBCol xl="9">
//                 <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
//                   Invoice &gt; &gt;{" "}
//                   <strong>ID: #{billingRecords.billingId}</strong>
//                 </p>
//               </MDBCol>
//               <MDBCol xl="3" className="float-end"></MDBCol>
//             </MDBRow>
//           </MDBContainer>
//           <MDBContainer>
//             <MDBCol md="12" className="text-center">
//               <MDBIcon
//                 fab
//                 icon="mdb"
//                 size="4x"
//                 className="ms-0 "
//                 style={{ color: "#5d9fc5" }}
//               />
//               <p className="pt-0">India Drive</p>
//             </MDBCol>
//           </MDBContainer>
//           <MDBRow>
//             <MDBCol xl="8">
//               <MDBTypography listUnStyled>
//                 <li className="text-muted">
//                   To: <span style={{ color: "#5d9fc5" }}>saffafs</span>
//                 </li>
//                 <li className="text-muted">asdfaf</li>
//                 <li className="text-muted">afdsaf</li>
//                 <li className="text-muted">
//                   <MDBIcon fas icon="phone-alt" />
//                   adsadsda
//                 </li>
//               </MDBTypography>
//             </MDBCol>
//             <MDBCol xl="4">
//               <p className="text-muted">Invoice</p>
//               <MDBTypography listUnStyled>
//                 <li className="text-muted">
//                   <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
//                   <span className="fw-bold ms-1">ID:</span># asdsgfdg
//                 </li>
//                 <li className="text-muted">
//                   <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
//                   <span className="fw-bold ms-1">Creation Date: </span>
//                   safgfdgbd
//                 </li>
//                 <li className="text-muted">
//                   <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
//                   <span className="fw-bold ms-1">Staff Name:</span>
//                   <span className="badge bg-warning text-black fw-bold ms-1">
//                     sdfvb
//                   </span>
//                 </li>
//               </MDBTypography>
//             </MDBCol>
//           </MDBRow>
//           <MDBRow className="my-2 mx-1 justify-content-center">
//             <MDBTable striped borderless>
//               <MDBTableHead
//                 className="text-white"
//                 style={{ backgroundColor: "#84B0CA" }}
//               >
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Customer name</th>
//                   <th scope="col">Final fuel status</th>
//                   <th scope="col">User email id</th>
//                   <th scope="col">Amount</th>
//                 </tr>
//               </MDBTableHead>
//               <MDBTableBody>
//                 <tr>
//                   <th scope="row">1</th>
//                   <td> {billingRecords.userName}</td>
//                   <td>{billingRecords.fuelStatus}</td>
//                   <td>{billingRecords.userEmailId}</td>
//                   <td>{billingRecords.billAmount}</td>
//                 </tr>
//               </MDBTableBody>
//             </MDBTable>
//           </MDBRow>
//           <MDBRow>
//             <MDBCol xl="8">
//               <p className="ms-3">
//                 Add additional notes and payment information
//               </p>
//             </MDBCol>
//             <MDBCol xl="3">
//               <p className="text-black float-start">
//                 <span className="text-black me-3"> Total Amount</span>
//                 <span style={{ fontSize: "25px" }}>
//                   {billingRecords.billAmount}
//                 </span>
//               </p>
//             </MDBCol>
//           </MDBRow>
//           <hr />
//           <MDBRow>
//             <MDBCol xl="10">
//               <p>Thank you for your purchase</p>
//             </MDBCol>
//             <MDBCol xl="2">
//               <MDBBtn
//                 style={{ backgroundColor: "#60bdf3" }}
//                 onClick={() => window.print()}
//               >
//                 Print
//               </MDBBtn>
//             </MDBCol>
//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>
//     </div>
//   );
// }

// export default Invoice;
