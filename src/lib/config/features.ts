// Feature toggles — flip to `true` to re-enable a surface.
//
// `faviconBadge` gates the red-dot favicon painter.
//
// `legacyUi` gates every "legacy sunnylink" surface: top banner,
// device-card chip, status-pill dot, dashboard hero banner, and the
// LegacyInfoModal. One flag because these always ship together.
export const FEATURES = {
	faviconBadge: false,
	legacyUi: false
} as const;
