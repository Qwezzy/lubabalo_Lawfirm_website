function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-secondary-600 border-r-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner; 