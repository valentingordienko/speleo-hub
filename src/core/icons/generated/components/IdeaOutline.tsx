import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IdeaOutline.svg';

export function IdeaOutline(props: TProps) {
  return (
    <Icon {...props} name="IdeaOutline">
      <SVG />
    </Icon>
  );
}
