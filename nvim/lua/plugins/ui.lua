return {
<<<<<<< HEAD
   --[[{
=======
   {
>>>>>>> origin/master
      "m4xshen/catppuccinight.nvim",
      name = "catppuccin",
      opts = {
         flavour = "mocha",
         custom_highlights = function(colors)
            return {
               VertSplit = { fg = colors.surface0 },
            }
         end,
      },
      init = function()
<<<<<<< HEAD
         vim.cmd.colorscheme("material")
            --Lua:
         end,
   },]]--
=======
         vim.cmd.colorscheme("catppuccin")
      end,
   },
>>>>>>> origin/master
   {
      "aznhe21/actions-preview.nvim",
      config = function()
         vim.keymap.set(
            { "v", "n" },
            "<Leader>ca",
            require("actions-preview").code_actions
         )
      end,
   },
   {
      "rcarriga/nvim-notify",
      config = function()
         vim.notify = require("notify")
      end,
   },
}
