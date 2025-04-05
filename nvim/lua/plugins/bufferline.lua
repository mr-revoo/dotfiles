return {
  -- Bufferline
  {
    'akinsho/bufferline.nvim',
    dependencies = 'nvim-tree/nvim-web-devicons',
    config = function()
      vim.opt.termguicolors = true
      require("bufferline").setup{
        options = {
          hover = {
            enabled = true,
            delay = 150,
            reveal = {'close'}
          }
        }
      }
    end
  }
}

