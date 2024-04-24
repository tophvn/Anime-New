const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function () {
    search.classList.toggle('active');
}
    <script>
        // JavaScript để mở và đóng cửa sổ đăng nhập
        function openLoginForm() {
            document.getElementById("loginForm").style.display = "block";
        }

        function closeLoginForm() {
            document.getElementById("loginForm").style.display = "none";
        }
    </script>