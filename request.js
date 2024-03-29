////// put this code in file named with request.js /// created by ahmed wageh || bergo

const { Discord, EmbedBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder } = require(`discord.js`)
const { Client, Interaction, ApplicationCommandOptionType, } = require("discord.js")
module.exports = {

    name: "request",
    description: "Make a request",


    run: async (client, interaction) => {

        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("model")
                    .setLabel("Click on the button")
                    .setEmoji("👍")
                    .setStyle(ButtonStyle.Secondary)

            )
            
            
            /////// 

        const message = await interaction.reply({
            embeds: [new EmbedBuilder()
                .setDescription("**To make a request click on button**")], components: [button] 
        });
        const model = new ModalBuilder()
        .setCustomId("model")
        .setTitle("A new request")


    const model2 = new TextInputBuilder()
        .setCustomId("text")
        .setLabel("the type of your request")
        .setStyle(TextInputStyle.Short)

    const model3 = new TextInputBuilder()
        .setCustomId("go")
        .setLabel("Your requset")
        .setStyle(TextInputStyle.Paragraph)


    const num1 = new ActionRowBuilder().addComponents(model2)
    const num2 = new ActionRowBuilder().addComponents(model3)

    model.addComponents(num1, num2)

        

            const collector = message.createMessageComponentCollector()
            collector.on("collect" , async i => {
                if (i.isButton()){
                if(i.customId === "model"){
                    await i.showModal(model)




                 
                    


                }

            }



            })

           




        }






    }
    
    
    
    ////// put these codes in the index.js file =>
    
    
    ////// you must define Events by      const Events = require ("discord.js")
    
    
    client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isModalSubmit()) return;

  if (interaction.customId === 'model') {
    await interaction.reply({
      embeds: [new EmbedBuilder()
        .setDescription(`**Done your request sent**`)



      ], ephemeral: true
    })

    // TODO: Add components to modal...
  }
  const text = interaction.fields.getTextInputValue("text");
  const go = interaction.fields.getTextInputValue("go");
  const user = interaction.user.id;


  const channel = interaction.guild.channels.cache.get("1057017654541557873")

  const embed = new EmbedBuilder()
    .setDescription(`**<@${user}>\n \`\ the type of request\`\ \n ${text}\n\n \`\ the request => \`\ \n  ${go}  **`)
    .setThumbnail(interaction.user.displayAvatarURL())
    .setTitle(`طلب جديد من`)
  await channel.send({ embeds: [embed] }).then(()=>{
    channel.send ("https://b.top4top.io/p_2555y3swm0.gif")


  })
  
});
    
    
    
    
    
    
