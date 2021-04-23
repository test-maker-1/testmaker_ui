import { useState } from "react";

const useOpen = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToggle = () => setOpen((prevOpen) => !prevOpen);

  return { open, onOpen, onClose, onToggle };
};

export default useOpen;
