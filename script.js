function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
AOS.init();

 function sendEmail() {
        
        var recipientEmail = 'contact@riteshpatel.in';

        // Create the mailto link
        var mailtoLink = 'mailto:' + recipientEmail;

        // Open the user's default email client
        window.location.href = mailtoLink;
    }
