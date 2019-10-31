class Api::V1::DesignController < ApiController
  def colors
    json(FigmaService.get_colors)
  end
end
