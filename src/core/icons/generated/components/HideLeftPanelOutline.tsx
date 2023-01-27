import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HideLeftPanelOutline.svg';

export function HideLeftPanelOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="HideLeftPanelOutline">
      <SVG />
    </Icon>
  );
}
