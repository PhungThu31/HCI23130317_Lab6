class Card {
    constructor(title, badge, description) {
        this.title = title;
        this.badge = badge;
        this.description = description;
        // Sử dụng Lorem Picsum để tạo ảnh ngẫu nhiên
        this.imgSrc = `https://picsum.photos/100/100?random=${Math.floor(Math.random() * 1000)}`;  // Kích thước ảnh nhỏ
    }

    createCard() {
        return `
            <div class="col">
                <div class="card h-100 text-center p-3 shadow-sm">
                    <!-- Đặt ảnh nhỏ và tròn như icon -->
                    <img src="${this.imgSrc}" class="mx-auto my-3 rounded-circle" alt="${this.title}" style="width: 50px; height: 50px; object-fit: cover;">
                    <h5 class="fw-bold">${this.title} <span class="badge bg-dark">${this.badge}</span></h5>
                    <p class="text-muted">${this.description}</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-primary" onclick="openPopup()">Continue</a>
                        <button class="btn btn-outline-secondary">Guide</button>
                    </div>
                </div>
            </div>
        `;
    }
}

class CardRenderer {
    constructor(cardsData) {
        this.cardsData = cardsData;
    }

    renderCards() {
        const cardContainer = document.getElementById("cardContainer");
        const cards = this.cardsData.map(card => {
            const cardObj = new Card(card.title, card.badge, card.description);
            return cardObj.createCard();
        });
        cardContainer.innerHTML = cards.join('');
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    const cardsData = [
        { title: "JavaScript", badge: "Mocha", description: "Use the Mocha testing framework and create unit tests to grade solutions." },
        { title: "TypeScript", badge: "Mocha", description: "Use the Mocha testing framework and create unit tests to grade solutions." },
        { title: "Python", badge: "pytest", description: "pytest is the most popular and fully-featured Python testing framework." },
        { title: "PHP", badge: "PHPUnit", description: "PHPUnit is a programmer-oriented testing framework for PHP." },
        { title: "Java", badge: "JUnit", description: "JUnit is a popular unit-testing framework in the Java ecosystem." },
        { title: "Kotlin", badge: "JUnit", description: "JUnit is a popular unit-testing framework in the Kotlin ecosystem." }
    ];

    const cardRenderer = new CardRenderer(cardsData);
    cardRenderer.renderCards();
});

function openPopup() {
    document.getElementById("challenge-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("challenge-popup").style.display = "none";
}

function goToContinuePage() {
    window.location.href = "continue.html";
}
// /////////////////////////////////
document.getElementById('addTestCase').addEventListener('click', function() {
    const testCaseContainer = document.getElementById('testCases');
    
    // Tạo một div mới cho test case
    const newTestCase = document.createElement('div');
    newTestCase.classList.add('input-group', 'mb-2');
    newTestCase.innerHTML = `
        <input type="text" class="form-control" placeholder="Input" aria-label="Test case input">
        <span class="input-group-text">--></span>
        <input type="text" class="form-control" placeholder="Expected output" aria-label="Expected output">
    `;
    
    // Thêm test case mới vào container
    testCaseContainer.appendChild(newTestCase);
});



// Handle form submission
document.getElementById('customChallengeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Custom challenge updated successfully!');
});
