const navbar = document.getElementById("navBar");
const heading1 = document.getElementById("heading1");
const para1 = document.getElementById("para1");
const image = document.getElementById("image");
const heading2 = document.getElementById("heading2");
const para2 = document.getElementById("para2");
const button = document.getElementById("button");
const images = [
    {src : "humanbody.webp",
        nav : "Human Body",
        head1 : "External Body Parts",
        pr1 : "The human body has several external parts that include: - Head: face, eyes, ears, nose - Torso: chest, abdomen - Arms: shoulders, elbows, wrists, hands- Legs: hips, knees, ankles, feetSkin, hair. The human body is a complex and fascinating system, comprising both internal and external parts that work harmoniously to maintain overall health and function. Internally, the body consists of vital organs such as the heart, lungs, brain, liver, and kidneys, which perform essential functions like circulation, respiration, cognition, digestion, and filtration.",
        head2 : "External Body Parts",
        pr2 : "The human body also consists of internal organs and systems: - Skeletal system: bones, cartilage  - Muscular system: muscles - Circulatory system: heart, blood vessels- Respiratory system: lungs, trachea Externally, the body features structures like the skin, muscles, bones, and sensory organs, which provide protection, movement, support, and interaction with the environment. Understanding the intricate relationships between these internal and external components is crucial for appreciating the remarkable complexity and beauty of the human body.",
    
    },
    {src : "solarsytem.jpg",
    nav : "Solar System",
    head1 : "An Overview",
    pr1 : "The Solar System is a collection of celestial objects that orbit around our star, the Sun. It consists of eight planets, five dwarf planets, numerous moons, asteroids, comets, and other smaller bodies. The Solar System formed around 4.6 billion years ago from a giant cloud of gas and dust called the solar nebula. Over time, gravity caused the material to collapse, and the Sun and planets formed.The four inner planets (Mercury, Venus, Earth, and Mars) are rocky and relatively small, while the four outer planets (Jupiter, Saturn, Uranus, and Neptune) are gas giants, composed primarily of hydrogen and helium. ",
    head2 : " Their Characteristics",
    pr2 : "The eight planets in our Solar System are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Each planet has its own unique characteristics, such as size, temperature, and composition. For example, Jupiter is the largest planet, while Mercury is the smallest. Venus is the hottest planet, with surface temperatures reaching up to 462°C, while Neptune is the coldest, with temperatures as low as -224°C. Understanding the characteristics of each planet helps us better appreciate the diversity and complexity of our Solar System.",

},
    {
        src : "atom.png",
        nav : "Atom",
        head1 : "The Building Blocks of Matter",
        pr1 : "Atoms are the fundamental units of matter, comprising the entire universe. An atom consists of three main subatomic particles: protons, neutrons, and electrons. Protons and neutrons reside in the nucleus, the central core of the atom, while electrons orbit around it. The number of protons in an atom's nucleus determines its chemical element, such as hydrogen, oxygen, or carbon. Atoms are incredibly small, with radii measuring around 100 picometers. Despite their minuscule size, atoms are the backbone of all matter, from the air we breathe to the stars in the cosmos.",
       head2 : "Atomic Structure and Properties",
       pr2 : "The atomic structure is crucial in understanding the properties of elements. Electrons occupy specific energy levels or shells, and their arrangement determines an atom's chemical reactivity. The number of electrons in an atom equals the number of protons, making the atom electrically neutral. Atoms can form chemical bonds by sharing or exchanging electrons with other atoms, resulting in molecules. Atomic properties, such as electronegativity and ionization energy, influence an element's behavior in chemical reactions. Understanding atomic structure and properties is essential in various fields."
    },
    
    {src : "realnumber.webp",
        nav : "Real Number",
        head1 : "Properties of Real Numbers",
        pr1 : "Real numbers are a fundamental concept in mathematics, comprising all rational and irrational numbers. They can be represented on the number line, extending infinitely in both positive and negative directions. Real numbers include whole numbers (0, 1, 2, ...), fractions (3/4, 22/7), and decimals (0.5, 3.14). They also encompass irrational numbers, such as pi (π) and the square root of 2, which cannot be expressed as finite decimals or fractions. Real numbers satisfy various properties, including commutativity, associativity, and distributivity, making them essential for algebraic operations",
        head2 : "Importance of Real Numbers",
        pr2 : "Real numbers have numerous applications in various fields, including science, engineering, economics, and finance. They are used to measure physical quantities, such as length, mass, and time. In calculus, real numbers facilitate the study of rates of change and accumulation. In statistics, real numbers help analyze data and make predictions. Real numbers are also crucial in computer science, programming, and cryptography. Moreover, real numbers provide a foundation for advanced mathematical concepts, such as complex numbers, vectors, and matrices. Understanding real numbers is essential for problem-solving and critical thinking in various disciplines.",
    
    },
]
let currentIndex = 0;
button.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImageAndData();
  });
  function updateImageAndData(){
    image.src = images[currentIndex].src;
    navbar.textContent = images[currentIndex].nav;
    heading1.textContent = images[currentIndex].head1;
    para1.textContent = images[currentIndex].pr1;
    heading2.textContent = images[currentIndex].head2;
    para2.textContent = images[currentIndex].pr2;
  }

  updateImageAndData();

  