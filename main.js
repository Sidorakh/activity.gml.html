import { DiscordSDK } from "@discord/embedded-app-sdk";

window.discord_sdk_is_ready = function() {
  return window.discord_sdk_ready;
}

function sdk() {
  /** @type {DiscordSDK} */
  const discord_sdk = window.discord_sdk;
  return discord_sdk;
}

window.discord_sdk_get_client_id = function() {
  if (sdk()) return sdk().clientId || "";
}

window.discord_sdk_get_channel_id = function() {
  if (sdk()) return sdk().channelId || "";
}

window.discord_sdk_get_guild_id = function() {
  if (sdk()) return sdk().guildId || "";
}

window.discord_sdk_get_instance_id = function() {
  if (sdk()) return sdk().instanceId;
}

window.discord_sdk_get_platform = function() {
  if (sdk()) return sdk().platform;
}


window.discord_sdk_ready = false;
window.discord_sdk_setup = async function (id) {
  window.discord_sdk = new DiscordSDK(id);
  window.discord_sdk.ready();

  window.discord_sdk_ready = true;

  window.gml_Script_gmcallback_discord_sdk_callback(null,null,"DISCORD_READY",JSON.stringify({id: id}));
}


window.discord_sdk_subscribe = function(event) {
  sdk().subscribe(event, (data)=>{
    window.gml_Script_gmcallback_discord_sdk_callback(null,null,`DISCORD_${event}`,JSON.stringify(data))
  });
} 
window.discord_sdk_unsubscribe = function(event) {
  sdk().unsubscribe(event)

}

window.function_test = function() {
  return "i'm a function!";

}


//const discord = new DiscordSDK(import.meta.env.VITE_CLIENT_ID)



