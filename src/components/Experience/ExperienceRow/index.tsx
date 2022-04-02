import React from "react";
// import ExperienceCard from "../ExperienceCard";

// interface ExperienceRowProps {
//   imageURL: string;
//   siteURL: string;
//   description: string;
//   org: string;
//   position: string;
//   align: string;
// }

// const index: React.FC<ExperienceRowProps> = ({
//   imageURL,
//   siteURL,
//   description,
//   org,
//   position,
//   align,
// }) => {
//   if (align == "r") {
//     return (
//       <div className="experience-tree-row">
//         <div className="experience-tree-row-container"></div>
//         <div style={{ width: "12%" }}>
//           <div className="experience-tree-row-bar">
//             <ExperienceCard imageURL={imageURL} siteURL={siteURL} />
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             width: "44%",
//             justifyContent: "left",
//             padding: "55px 0px 0px 0px",
//           }}
//         >
//           <div className="experience-dialogue-arrow-left" />
//           <div className="experience-dialogue">
//             <div style={{ padding: "10px" }}>
//               <div
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 {org}
//               </div>
//               <div
//                 style={{ color: "#BEEBF9", padding: "5px 0", fontSize: "17px" }}
//               >
//                 {position}
//               </div>
//               <div
//                 style={{
//                   fontSize: "17px",
//                   color: "#FFFFFF",
//                   textAlign: "justify",
//                 }}
//               >
//                 {description}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="experience-tree-row">
//         <div className="experience-tree-row-container">
//           <div className="experience-dialogue" style={{}}>
//             <div style={{ padding: "10px" }}>
//               <div
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "20px",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 {org}
//               </div>
//               <div
//                 style={{ color: "#BEEBF9", padding: "5px 0", fontSize: "17px" }}
//               >
//                 {position}
//               </div>
//               <div
//                 style={{
//                   fontSize: "17px",
//                   color: "#FFFFFF",
//                   textAlign: "justify",
//                 }}
//               >
//                 {description}
//               </div>
//             </div>
//           </div>
//           <div className="experience-dialogue-arrow-right" />
//         </div>
//         <div style={{ width: "12%" }}>
//           <div className="experience-tree-row-bar">
//             <ExperienceCard imageURL={imageURL} siteURL={siteURL} />
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             width: "44%",
//             justifyContent: "left",
//             padding: "55px 0px 0px 0px",
//           }}
//         />
//       </div>
//     );
//   }
// };

// export default index;
