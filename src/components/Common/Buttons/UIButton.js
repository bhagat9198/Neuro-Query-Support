import Button from '@mui/material/Button';

export default function UIButton({ type, children }) {
  return (
    <div>
      <Button variant={type == "Primary" ? "contained" : "outlined"}>{children}</Button>
    </div>
  );
}
