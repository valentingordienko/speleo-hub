import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsDownOutline.svg';

export function ThumbsDownOutline(props: TProps) {
  return (
    <Icon {...props} name="ThumbsDownOutline">
      <SVG />
    </Icon>
  );
}
