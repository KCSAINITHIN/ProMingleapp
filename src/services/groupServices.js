// Mocking an API call to fetch groups
export const getGroups = async () => {
    const groups = [
      { name: 'Tech Enthusiasts', description: 'A group for technology lovers.' },
      { name: 'Book Club', description: 'A group for avid readers.' },
      { name: 'Fitness Fanatics', description: 'Join us for fitness challenges and tips.' }
    ];
  
    return groups;
  };
  