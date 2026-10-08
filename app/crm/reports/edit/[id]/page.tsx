interface EditReportPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditReportPage({
  params,
}: EditReportPageProps) {
  const { id } = await params;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "28px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Edit Report
        </h1>

        <p
          style={{
            margin: "0 0 28px",
            color: "#6b7280",
          }}
        >
          Update the report details below.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <label
              htmlFor="reportName"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: "#374151",
              }}
            >
              Report Name
            </label>

            <input
              id="reportName"
              name="reportName"
              type="text"
              placeholder="Enter report name"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="reportType"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: "#374151",
              }}
            >
              Report Type
            </label>

            <select
              id="reportType"
              name="reportType"
              defaultValue=""
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "15px",
                background: "#ffffff",
                boxSizing: "border-box",
              }}
            >
              <option value="" disabled>
                Select report type
              </option>
              <option value="sales">Sales Report</option>
              <option value="customer">Customer Report</option>
              <option value="lead">Lead Report</option>
              <option value="employee">Employee Report</option>
              <option value="financial">Financial Report</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: "#374151",
              }}
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Enter report description"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "15px",
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="status"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: "#374151",
              }}
            >
              Status
            </label>

            <select
              id="status"
              name="status"
              defaultValue="draft"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "15px",
                background: "#ffffff",
                boxSizing: "border-box",
              }}
            >
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            <button
              type="button"
              style={{
                padding: "12px 22px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                background: "#ffffff",
                color: "#374151",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                padding: "12px 22px",
                border: "none",
                borderRadius: "8px",
                background: "#111827",
                color: "#ffffff",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Update Report
            </button>
          </div>

          <input type="hidden" name="reportId" value={id} />
        </form>
      </div>
    </main>
  );
}