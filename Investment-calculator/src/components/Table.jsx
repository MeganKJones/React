import {calculateInvestmentResults, formatter} from "../util/investment.js";

const TABLE_HEADERS = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital']

export default function Table({userInput}) {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
            <tr>
                {TABLE_HEADERS.map((header) => <th key={header}>{header}</th>)}
            </tr>
            </thead>
            <tbody>
            {resultsData.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            );
            })}
            </tbody>
        </table>
    )
}