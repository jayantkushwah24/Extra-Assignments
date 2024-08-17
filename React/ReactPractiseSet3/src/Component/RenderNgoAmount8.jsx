// 8. Given an array of objects representing people who donated money to the NGO. Each object
// consists of: id, name, amount. Build a React component that takes the data as props and shows
// the total donation collected on the DOM. Output should be in the
// format: Total Donation Collected: _amount_

export function RenderNgoAmount({ donationData }) {
  return <>
  <h3>Total Amount Donated : </h3>
  {donationData.reduce((acc, prev) => acc + prev.Donation, 0)}</>;
}
