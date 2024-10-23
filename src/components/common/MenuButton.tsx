function MenuButton() {
  const toggleMenu = () => {
    const menu = document.getElementById('menu') as HTMLElement;
    const menuIcon = document.getElementById('menu-icon') as HTMLElement;
    const closeIcon = document.getElementById('close-icon') as HTMLElement;

    if (menu) {
      menu.classList.toggle('hidden');
      menu.classList.toggle('show');

      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  };

  return (
    <button
      id="menu-button"
      onClick={toggleMenu}
      className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-black hover:border-black"
    >
      <svg
        id="menu-icon"
        className="fill-current h-6 w-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
      </svg>
      <svg
        id="close-icon"
        className="hidden fill-current h-6 w-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 8.586l4.293-4.293 1.414 1.414L11.414 10l4.293 4.293-1.414 1.414L10 11.414l-4.293 4.293-1.414-1.414L8.586 10 4.293 5.707l1.414-1.414L10 8.586z" />
      </svg>
    </button>
  );
}

export default MenuButton;
