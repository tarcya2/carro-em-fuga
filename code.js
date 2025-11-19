

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f","4065b502-0b15-4a46-abea-3eed5db78a8d","26b7a926-4138-4fda-9323-4cd24efad32c","39879dc3-5c10-4aab-901e-993e0c0ec13c","6ca22de0-cc68-455a-aa1f-271a0e144f5f","a352ad3c-6baf-4e06-b342-81e6390a2f66"],"propsByKey":{"b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f":{"name":"carro","sourceUrl":"assets/v3/animations/ufZJzUXAvI0z43_eOViEJOSM3jfzX1JF6UKxExhbviE/b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":4,"version":"8V6oKrwRXBL3rCDX1Hhc2GY9zNH27fDu","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/v3/animations/ufZJzUXAvI0z43_eOViEJOSM3jfzX1JF6UKxExhbviE/b5d8fc53-f947-4b2d-ac8d-f61f9fbbb56f.png"},"4065b502-0b15-4a46-abea-3eed5db78a8d":{"name":"carro1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"fWGYvfgLGkESvzMQVgjYY6920jRwI78M","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/4065b502-0b15-4a46-abea-3eed5db78a8d.png"},"26b7a926-4138-4fda-9323-4cd24efad32c":{"name":"carro2","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"Su1XZB_9.D7NIt_3j_LgMn4P4qmSs00m","loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/26b7a926-4138-4fda-9323-4cd24efad32c.png"},"39879dc3-5c10-4aab-901e-993e0c0ec13c":{"name":"comeco","sourceUrl":null,"frameSize":{"x":666,"y":638},"frameCount":1,"looping":true,"frameDelay":12,"version":"SKM159rbJr2FKE3tbBNtNAC5XCPL6ufU","loadedFromSource":true,"saved":true,"sourceSize":{"x":666,"y":638},"rootRelativePath":"assets/39879dc3-5c10-4aab-901e-993e0c0ec13c.png"},"6ca22de0-cc68-455a-aa1f-271a0e144f5f":{"name":"estrada","sourceUrl":null,"frameSize":{"x":556,"y":556},"frameCount":1,"looping":true,"frameDelay":12,"version":"u_wqVwmRp2Zy5Os4bEGXYgvVVYnz1a1J","loadedFromSource":true,"saved":true,"sourceSize":{"x":556,"y":556},"rootRelativePath":"assets/6ca22de0-cc68-455a-aa1f-271a0e144f5f.png"},"a352ad3c-6baf-4e06-b342-81e6390a2f66":{"name":"recomecar","sourceUrl":null,"frameSize":{"x":612,"y":611},"frameCount":1,"looping":true,"frameDelay":12,"version":"2bsD79y6Rui8j.f9yJT3GoA_tBC.f5Iv","loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":611},"rootRelativePath":"assets/a352ad3c-6baf-4e06-b342-81e6390a2f66.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var estrada = createSprite(200, 200);
estrada.setAnimation("estrada");

var carro_jogador = createSprite(200, 350);
carro_jogador.setAnimation("carro");
carro_jogador.scale = 0.6;

var carro1 = createSprite(100, 200);
carro1.setAnimation("carro1");
carro1.scale = 0.6;

var carro2 = createSprite(325, 350);
carro2.setAnimation("carro2");
carro2.scale = 0.6;

var recomecar = createSprite(200, 200);
recomecar.setAnimation("recomecar");
recomecar.scale = 0.8;
recomecar.visible = false;

var comeco = createSprite(200, 200);
comeco.setAnimation("comeco");
comeco.scale = 0.8;

createEdgeSprites();

function draw() {
drawSprites();
if(keyDown("left")){
    carro_jogador.velocityX = -3; 
  }
if(keyDown("right")){
    carro_jogador.velocityX = 3; 
  }
if(carro_jogador.isTouching(carro1)){
    recomecar.visible = true;
  }
if(carro_jogador.isTouching(carro2))
  {
    recomecar.visible = true;
  }
if(carro1.isTouching(carro2)){
    carro1.x = randomNumber(400, 0);
    carro1.y = 0;
  }
if(carro1.y > 405){
    carro1.x = randomNumber(400, 0);
    carro1.y = 0;
  }
if(carro2.y > 405){
    carro2.x = randomNumber(400, 0);
    carro2.y = 0;
  }
carro_jogador.bounceOff(edges);
if(keyDown("space")){
      carro1.velocityY = 10;
      carro2.velocityY = 10;
      comeco.visible = false;
  }
if(mousePressedOver(recomecar)){
      carro1.velocityY = 10;
      carro2.velocityY = 10;
      recomecar.visible = false;
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
