/* Main bonane JS */

/**
 * launch carousel
 */
function launchCarousel() {
  $("#quote-carousel").carousel({
    pause: true,
    interval: 4000,
  });
}

$(document).ready(function () {
  launchCarousel();
  $.get("https://iutcessa-new-year-15.onrender.com/get/", function(data, status){
    console.log(data,status);
  });
});

/**
 * Github base_url for user github profile
 *
 * @type {string}
 */
const baseUrl = "https://github.com/";

/**
 * Get last year
 *
 * @type {number}
 */
//let gasyYear = new Date().getFullYear();
let gasyYear = 1403;

function toFarsiNumber(num) {
  const mapToFarsiDigit = new Map([
    ["0", "۰"],
    ["1", "۱"],
    ["2", "۲"],
    ["3", "۳"],
    ["4", "۴"],
    ["5", "۵"],
    ["6", "۶"],
    ["7", "۷"],
    ["8", "۸"],
    ["9", "۹"],
  ]);
  return num
    .toString()
    .split("")
    .map((n) => mapToFarsiDigit.get(n))
    .join("");
}

/**
 * Set date inside html page
 *
 * @type {number}
 */
document.querySelector("#year").innerText = toFarsiNumber(gasyYear);
document.title += ` | ${gasyYear}`;

/**
 * Format the user message
 *
 * @param {string} message
 *
 * @returns {string}
 */
function formatMessage(message) {
  return message? message.slice(0, 400) : "پیام";
}

/**
 * Check slide active by key i
 *
 * @param {number} i
 *
 * @returns {string}
 */
function isActive(i) {
  return i === 0 ? "active" : "";
}

/**
 * Check the user image and change if not exist
 *
 * @param {string} image filename
 *
 * @returns {string}
 */
function checkImage(image) {
  return (
    image ??
    "https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
  );
}

/**
 * Check the username
 *
 * @param {string} name
 *
 * @returns {string}
 */
function checkName(name) {
  return name ?? "From Madagascar";
}

/**
 * Check user github link
 *
 * @param link
 *
 * @returns {string}
 */
function checkGithub(link) {
  return link ? baseUrl + link : "https://github.com/";
}

/**
 *
 * @param nous {$ObjMap}
 *
 * @returns {string}
 */
function getFlag(nous) {
  return nous.flag ?? "mg";
}

// Fetch json file


$.getJSON("USER.json", function (elements) {
  elements.forEach(function (nous, i) {
    document.getElementById("carousel-indicators").innerHTML += `
              <li data-target="#quote-carousel" data-slide-to="${i}" class="${isActive(
      i
    )}" title="${checkName(nous.name)}">
                <img src="${checkImage(nous.image)}" alt="">
              </li>`;

    document.getElementById("name").innerHTML += `
            <div class="item ${isActive(i)}">
               <blockquote>
                  <div class="row">
                       <div class="col-sm-3 text-center">
                           <img class="img-circle" src="${checkImage(
                             nous.image
                           )}" style="width: 100px;height:100px;">
                       </div>
                        <div class="col-sm-9">
                            <p style="padding-right:20px">${formatMessage(nous.message)}</p>
                            <div class="row">
                                <small>
                                    ${checkName(nous.name)}
                                    <a href="${checkGithub(
                                      nous.username
                                    )}" target="_blank" 
                                    style="color: #f9f9f9;margin: 5px">
                                  
                                    </a>
                                </small>
                            </div>
                        </div>
                    </div>
               </blockquote>
            </div>`;
  });
});
