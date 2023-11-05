const printData = (id, data) => {
    const outputParagraph = document.querySelector(id);
    outputParagraph.innerHTML = data;
}

const findUsersWithMostFriends = (users) => {
    const maxFriends = Math.max(...users.map(user => user.friends.length));

    const usersWithMostFriends = users.filter(user => user.friends.length === maxFriends);

    const userNames = usersWithMostFriends.map(user => `${user.name.first} ${user.name.last}`).join('<br/>');

    printData("#greatesFriendsCountOutput", userNames);
}

const getUserEmails = (users) => {
    users.map(user => {
        printData("#emailAddressesOutput", `<div>${user.email}</div>`);
    });
};

const findGreatestBalanceCompany = (users) => {
    const maxBalance = users.reduce((prev, current) => (prev && prev.balance > current.balance) ? prev : current)

    printData("#greatestBalanceCompanyOutput", maxBalance.company);
}

const findLowesBalanceCompany = (users) => {
    const maxBalance = users.reduce((prev, current) => (prev && prev.balance < current.balance) ? prev : current)

    printData("#lowestBalanceCompanyOutput", maxBalance.company);
}

document.addEventListener("DOMContentLoaded", (event) => {
    getUserEmails(users);
    findUsersWithMostFriends(users);
    findGreatestBalanceCompany(users);
    findLowesBalanceCompany(users);
});