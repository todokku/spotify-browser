class Api::V1::DesignController < ApiController
  def colors
    json(FigmaService.get_colors)
  end

  def comments
    json(FigmaService.get_comments)
  end
end
