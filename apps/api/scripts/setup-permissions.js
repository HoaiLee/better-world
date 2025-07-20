const fs = require('fs');
const path = require('path');

// This script will be run after the first admin user is created
// to set up public permissions for the content types

console.log('Setting up public permissions for content types...');
console.log('');
console.log('After creating your admin user, you need to:');
console.log('');
console.log('1. Go to Settings > Users & Permissions Plugin > Roles');
console.log('2. Click on "Public" role');
console.log('3. Enable the following permissions for each content type:');
console.log('');
console.log('   For "Speaker":');
console.log('   - find');
console.log('   - findOne');
console.log('');
console.log('   For "Testimonial":');
console.log('   - find');
console.log('   - findOne');
console.log('');
console.log('   For "Webinar":');
console.log('   - find');
console.log('   - findOne');
console.log('');
console.log('   For "Global":');
console.log('   - find');
console.log('   - findOne');
console.log('');
console.log('4. Save the permissions');
console.log('');
console.log('Alternatively, you can use the Strapi CLI to set permissions:');
console.log('npx strapi permissions:update --role=public --permissions=find,findOne --type=api::speaker.speaker');
console.log('npx strapi permissions:update --role=public --permissions=find,findOne --type=api::testimonial.testimonial');
console.log('npx strapi permissions:update --role=public --permissions=find,findOne --type=api::webinar.webinar');
console.log('npx strapi permissions:update --role=public --permissions=find,findOne --type=api::global.global'); 