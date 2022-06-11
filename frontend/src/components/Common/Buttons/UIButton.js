import Button from "@mui/material/Button";

export default function UIButton({ type, children, onClick }) {
  return (
    <div>
      <Button
        variant={type == "Primary" ? "contained" : "outlined"}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}
