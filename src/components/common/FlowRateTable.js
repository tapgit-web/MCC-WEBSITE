import React, { useState } from "react";
import { FLOW_RATE_TABLE_DATA } from "../../data/flowRateTable";
import "./FlowRateTable.css";
import { FiSearch, FiSliders } from "react-icons/fi";

const FlowRateTable = () => {
  const [filterDn, setFilterDn] = useState("");

  const query = filterDn.trim();

  const isMatched = (dnVal) => {
    if (!query) return false;
    return String(dnVal).includes(query);
  };

  return (
    <div className="cira-flowrate-card" aria-label="Electromagnetic Flow Meter Flow Rate Table">
      <div className="cira-flowrate-header">
        <div className="cira-flowrate-title-wrap">
          <h3 className="cira-flowrate-title">{FLOW_RATE_TABLE_DATA.title}</h3>
          <span className="cira-flowrate-condition">{FLOW_RATE_TABLE_DATA.condition}</span>
        </div>

        <div className="cira-flowrate-filter">
          <FiSearch aria-hidden="true" style={{ color: "var(--cira-text-muted)" }} />
          <input
            type="text"
            placeholder="Search DN size..."
            value={filterDn}
            onChange={(e) => setFilterDn(e.target.value)}
            className="cira-flowrate-search"
            aria-label="Filter table by DN size"
          />
        </div>
      </div>

      <div className="cira-flowrate-tables-grid">
        {/* Left Table: Standard Line Sizes (DN 10 to DN 350) */}
        <div className="cira-flowrate-col">
          <div className="cira-flowrate-col__head">
            <h4 className="cira-flowrate-col__title">Flow Rate Table</h4>
            <span className="cira-flowrate-col__cond">(Flow rate at v = 1 m/s)</span>
          </div>

          <div className="cira-flowrate-table-wrap">
            <table className="cira-flowrate-table">
              <thead>
                <tr>
                  <th>DN</th>
                  <th>M3/Hr.</th>
                  <th>LPM</th>
                  <th>LPS</th>
                </tr>
              </thead>
              <tbody>
                {FLOW_RATE_TABLE_DATA.smallSizes.map((row) => {
                  const highlighted = isMatched(row.dn);
                  return (
                    <tr key={row.dn} className={highlighted ? "is-highlighted" : ""}>
                      <td className="dn-cell">{row.dn}</td>
                      <td className="num-cell">{row.m3hr}</td>
                      <td className="num-cell">{row.lpm}</td>
                      <td className="num-cell">{row.lps}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Table: Large Conduits (DN 400 to DN 1600) */}
        <div className="cira-flowrate-col">
          <div className="cira-flowrate-col__head">
            <h4 className="cira-flowrate-col__title">Flow Rate Table</h4>
            <span className="cira-flowrate-col__cond">(Flow rate at v = 1 m/s)</span>
          </div>

          <div className="cira-flowrate-table-wrap">
            <table className="cira-flowrate-table">
              <thead>
                <tr>
                  <th>DN</th>
                  <th>M3/Hr.</th>
                  <th>LPM</th>
                  <th>LPS</th>
                  <th>MLD</th>
                </tr>
              </thead>
              <tbody>
                {FLOW_RATE_TABLE_DATA.largeSizes.map((row) => {
                  const highlighted = isMatched(row.dn);
                  return (
                    <tr key={row.dn} className={highlighted ? "is-highlighted" : ""}>
                      <td className="dn-cell">{row.dn}</td>
                      <td className="num-cell">{row.m3hr}</td>
                      <td className="num-cell">{row.lpm}</td>
                      <td className="num-cell">{row.lps}</td>
                      <td className="num-cell">{row.mld}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="cira-flowrate-footer">
        <p className="m-0">
          <strong>Flow Calculation Formula:</strong> Q = A × v = (π × D² / 4) × v. The values above represent reference flow rates at a velocity of <strong>v = 1 m/s</strong>.
        </p>
        <p className="m-0">
          For any different process velocity (e.g. 2 m/s or 3 m/s), multiply the tabulated flow rate values proportionally by the target flow velocity.
        </p>
      </div>
    </div>
  );
};

export default FlowRateTable;
