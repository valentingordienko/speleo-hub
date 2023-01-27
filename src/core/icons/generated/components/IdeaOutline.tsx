import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IdeaOutline.svg';

export function IdeaOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="IdeaOutline">
      <SVG />
    </Icon>
  );
}
